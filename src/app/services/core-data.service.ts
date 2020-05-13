import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cheque } from '../models/cheque';

@Injectable({
  providedIn: 'root'
})
export class CoreDataService {

  constructor(private http:HttpClient) { }

  SaveModel(cheque:Cheque[]){
    this.http.post("https://localhost:5003/api/values",cheque).subscribe(result=>console.log("saveres",result))
  }
}
