import { Component, OnInit } from '@angular/core';
import { Cheque } from '../models/cheque';
import { CoreDataService } from '../services/core-data.service';

@Component({
  selector: 'app-export-cheque',
  templateUrl: './export-cheque.component.html',
  styleUrls: ['./export-cheque.component.css']

})
export class ExportChequeComponent implements OnInit {
  imageUrl: string[];
  ready: boolean = false;
  initialized: boolean = false;
  ScannedCheques: Cheque[] = [];
  SelectedCheque: Cheque = {} as Cheque;
  DepositSlip: Cheque = {} as Cheque;
  cols: any[];
  batchTotal = 0;
  constructor(private coreDataService: CoreDataService) { }

  ngOnInit(): void {
    this.coreDataService.queryModel("EXPORT").subscribe(result => {
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

  export() {
    this.coreDataService.generateFiles().subscribe(result => {
      console.log(result)
      this.coreDataService.queryModel("EXPORT").subscribe(result => {
        console.log("export query", result);
        this.getQueryResult(result)
      });
    },
      err => console.log('HTTP Error', err),
      () => console.log('HTTP request completed.'));
  }

  getQueryResult(result) {
    this.ScannedCheques = [];
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
      cheque.modelID = element.modelID;

      this.ScannedCheques.push(cheque);
      console.log("scanned", this.ScannedCheques)
    });


  }

}
