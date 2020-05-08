import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Cheque } from '../models/cheque';
import { HubConnectionBuilder, HubConnection } from "@microsoft/signalr";
import { ExportChequeComponent } from '../export-cheque/export-cheque.component';
import { AuthorizeChequeComponent } from '../authorize-cheque/authorize-cheque.component';
declare var $: any;

@Component({
  selector: 'capture-cheque',
  templateUrl: './capture-cheque.component.html',
  styleUrls: ['./capture-cheque.component.css']
})
export class CaptureChequeComponent implements OnInit, AfterViewInit {

  title = 'web-scan33';
  imageUrl: string[];
  connection: HubConnection;
  ready: boolean = false;
  initialized: boolean = false;
  ScannedCheques: Cheque[] = [];
  constructor(public domSanitizer: DomSanitizer) { }
  ngAfterViewInit(): void {
    $(document).ready(function () {
      $('#dt-basic-checkbox').dataTable({
        select: {
          style: 'os',
          items: 'row'
        },
        "ordering": false
      });
    });

  }
  refreshtable(row:Cheque) {
    var table = $('#dt-basic-checkbox').DataTable();
    console.log("dataTable",table)
    table.row.add([row.serialNumber,row.sortCode,row.voucherType,row.accountNumber,row.amount]).draw();

  }
  ngOnInit(): void {
  }
  connectScanner() {
    this.connection = new HubConnectionBuilder().withUrl("https://localhost:5001/scanhub").build();
    this.connection.start().then(() => {
      console.log("Scanner Connected");
      this.ready = true;
      this.connection.on("initResult", (user, message) => {
        console.log("Received", message)
        this.initialized = true;
        //this.imageUrl="data:image/jpeg;base64,"+message ;
      });
      this.connection.on("scanResult", (user, result) => {
        console.log("Data", result)
        this.imageUrl = result[0].images;
        //debugger;
        result.forEach(element => {
          console.log("element", element)
          var cheque: Cheque = {
            Images: element.images,
            accountNumber: element.micr[0],
            amount: 0,
            payeeName: "",
            serialNumber: element.micr[1],
            sortCode: element.micr[2],
            voucherType: element.micr[3]
          };

          this.ScannedCheques.push(cheque);
          console.log("scanned", this.ScannedCheques)
          this.refreshtable(cheque);
        });
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

}
