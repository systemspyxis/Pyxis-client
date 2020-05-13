import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import { DomSanitizer } from '@angular/platform-browser';
import { Cheque } from '../models/cheque';

@Component({
  selector: 'app-authorize-cheque',
  templateUrl: './authorize-cheque.component.html',
  styleUrls: ['./authorize-cheque.component.css'],
  preserveWhitespaces:true,
  providers:[MessageService]
})


export class AuthorizeChequeComponent implements OnInit {
  imageUrl: string[];
  ScannedCheques: Cheque[] = [];
  SelectedCheque:Cheque;
  batchTotal:number;
  DepositSlip: Cheque = {} as Cheque;
  cols: any[];
  constructor(public domSanitizer: DomSanitizer,private messageService: MessageService) { }

  ngOnInit(): void {
  }
  onRowSelect(event) {
    this.imageUrl = event.data.Images;
}
reject(){

}
accept(){

}
}
