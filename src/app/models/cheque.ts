import { ChequeImage } from './cheque.image';

export interface Cheque{
    serialNumber:string;
    sortCode:string;
    voucherType:string;
    accountNumber:string;
    amount:number;
    payeeName:string;
    narration:string;
    Images:ChequeImage[];
    depositorsAccount:string;
    depositorsBranch:string;
    depositorsNarration:string;
    batchGuid:string;
    recordID:string;
    transactionCaptureDate:string;
    transactionCapturedBy:string;
    transactionAuthorisedDate:string;
    transactionexportDate:string;
    stage:string
}