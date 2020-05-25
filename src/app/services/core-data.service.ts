import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cheque } from '../models/cheque';

@Injectable({
  providedIn: 'root'
})
export class CoreDataService {

  constructor(private http: HttpClient) { }

  SaveModel(cheque: Cheque[]) {
    return this.http.post("https://localhost:5003/api/values", cheque)
  }
  queryModel(filter: string) {
    return this.http.get<any[]>(`https://localhost:5003/api/values/query/${filter}`);
  }

  updateModel(cheque: Cheque) {
    return this.http.post("https://localhost:5003/api/values/Update", cheque)
  }
  generateFiles() {
    return this.http.get("https://localhost:5003/api/values/Generate")
  }
}
