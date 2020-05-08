import { ChequeImage } from './cheque.image';

export interface Cheque{
    serialNumber:string;
    sortCode:string;
    voucherType:string;
    accountNumber:string;
    amount:number;
    payeeName:string;
    Images:ChequeImage[];
}