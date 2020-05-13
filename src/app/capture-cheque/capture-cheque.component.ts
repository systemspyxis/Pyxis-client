import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Cheque } from '../models/cheque';
import { HubConnectionBuilder, HubConnection } from "@microsoft/signalr";
import { MessageService } from 'primeng/api';
import { CoreDataService } from '../services/core-data.service';



declare var $: any;

@Component({
  selector: 'capture-cheque',
  templateUrl: './capture-cheque-feature.component.html',
  styleUrls: ['./capture-cheque.component.css'],
  preserveWhitespaces: true,
  providers: [MessageService]
})
export class CaptureChequeComponent implements OnInit, AfterViewInit {

  title = 'web-scan33';
  imageUrl: string[];
  connection: HubConnection;
  ready: boolean = false;
  initialized: boolean = false;
  ScannedCheques: Cheque[] = [];
  SelectedCheque: Cheque = {} as Cheque;
  DepositSlip: Cheque = {} as Cheque;
  cols: any[];
  batchTotal = 0;
  constructor(private coreDataService:CoreDataService, public domSanitizer: DomSanitizer, private messageService: MessageService) { }
  ngAfterViewInit(): void {


  }

  ngOnInit(): void {
    this.cols = [
      { field: 'accountNumber', header: 'Account Number' },
      { field: 'serialNumber', header: 'Cheque Number' },
      { field: 'sortCode', header: 'Bank' },
      { field: 'voucherType', header: 'Voucher' },
      { field: 'amount', header: 'Amount' }

    ];
  }
  connectScanner() {
    this.connection = new HubConnectionBuilder().withUrl("https://localhost:5001/scanhub").build();
    this.connection.start().then(() => {
      console.log("Scanner Connected");
      this.messageService.add({ severity: 'info', summary: 'Info Message', detail: 'Scanner Connected' })
      this.ready = true;
      this.connection.on("initResult", (user, message) => {
        console.log("Received", message)
        this.messageService.add({ severity: 'info', summary: 'Scanner Init', detail: message })
        this.initialized = true;
        //this.imageUrl="data:image/jpeg;base64,"+message ;
      });
      this.connection.on("scanResult", (user, result) => {
        console.log("Data", result)
        this.imageUrl = result[0].images;
        //debugger;
        result.forEach(element => {
          console.log("element", element)
          var cheque: Cheque = {} as Cheque;
          cheque.Images = element.images,
            cheque.accountNumber = element.micr[0],
            cheque.amount = 0,
            cheque.payeeName = "",
            cheque.serialNumber = element.micr[1],
            cheque.sortCode = element.micr[2],
            cheque.voucherType = element.micr[3],
            cheque.narration="",
            cheque.payeeName=""
            

          this.ScannedCheques.push(cheque);
          console.log("scanned", this.ScannedCheques)
        });
        this.SelectedCheque = this.ScannedCheques.slice(-1)[0];
      });
    })
      .catch((err) => {
        return console.error(err.toString());
      });
  }
  initializeScanner() {
    this.connection.invoke("InitializeScanner", "user", "message").catch(err => console.error(err));
  }
  scan() {
    this.connection.invoke("Scan", "user", "message").catch(err => console.error(err));
  }

  onRowSelect(event) {
    this.imageUrl = event.data.Images;
  }
  saveBatch() {
    this.ScannedCheques.forEach(item=>{
      item.depositorsAccount=this.DepositSlip.depositorsAccount;
      item.depositorsBranch=this.DepositSlip.depositorsBranch;
      item.depositorsNarration=this.DepositSlip.depositorsNarration;
      item.payeeName=(!!this.DepositSlip.payeeName)?this.DepositSlip.payeeName:"";

    });
    this.coreDataService.SaveModel(this.ScannedCheques);
  }


  batchBalancing(): boolean {
    return (this.batchTotal !== this.ScannedCheques.map(x => x.amount).reduce((x, y) => x + y, 0))||(this.batchTotal===0)
  }

}
