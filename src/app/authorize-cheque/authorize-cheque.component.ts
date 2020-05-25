import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DomSanitizer } from '@angular/platform-browser';
import { Cheque } from '../models/cheque';
import { CoreDataService } from '../services/core-data.service';


@Component({
  selector: 'app-authorize-cheque',
  templateUrl: './authorize-cheque.component.html',
  styleUrls: ['./authorize-cheque.component.css'],
  preserveWhitespaces: true,
  providers: [MessageService]
})


export class AuthorizeChequeComponent implements OnInit {
  imageUrl: string[]=[];
  ScannedCheques: Cheque[];
  displayBasic:boolean=false;
  SelectedCheque: Cheque;
  batchTotal: number;
  DepositSlip: Cheque = {} as Cheque;
  cols: any[];
  constructor(private coreDataService: CoreDataService, public domSanitizer: DomSanitizer, private messageService: MessageService) { }

  ngOnInit(): void {
    this.coreDataService.queryModel("VERIFY").subscribe(result=>{
      this.getQueryResult(result)
    });
    this.cols = [
      { field: 'accountNumber', header: 'Account Number' },
      { field: 'serialNumber', header: 'Cheque Number' },
      { field: 'sortCode', header: 'Bank' },
      { field: 'voucherType', header: 'Voucher' },
      { field: 'amount', header: 'Amount' }

    ];
    
  }
  onRowSelect(event) {
    this.imageUrl = event.data.Images;
  }
  reject() {
    this.displayBasic=true
  }
  accept() {
      this.coreDataService.updateModel(this.SelectedCheque).subscribe(res=>{
        this.coreDataService.queryModel("VERIFY").subscribe(result=>{
          this.getQueryResult(result)
        });
      });
      
  }
  getQueryResult(result) {
    this.ScannedCheques=[];
    result.forEach(element => {
      var cheque: Cheque = {} as Cheque;
      var images: Array<any> = [];
      images.push(element.frontTiff);
      images.push(element.frontJpeg);
      images.push(element.backJpeg);
      cheque.Images = images;

      cheque.accountNumber = element.accountNumber;
      cheque.amount = element.amount;
      cheque.payeeName = element.payeeName;
      cheque.serialNumber = element.serialNumber;
      cheque.sortCode = element.sortCode;
      cheque.voucherType = element.voucherType;
      cheque.narration = element.narration;
      cheque.depositorsAccount = element.depositorsAccount;
      cheque.depositorsBranch = element.depositorsBranch;
      cheque.payeeName = element.payeeName;
      cheque.transactionCapturedBy = element.transactionCapturedBy;
      cheque.transactionCaptureDate = element.transactionCaptureDate;
      cheque.modelID=element.modelID;

      this.ScannedCheques.push(cheque);
      console.log("scanned", this.ScannedCheques)
    });
    this.SelectedCheque= {} as Cheque;
    this.SelectedCheque = this.ScannedCheques.slice(-1)[0];
    this.imageUrl=this.SelectedCheque?this.SelectedCheque.Images:[];

  }
}
