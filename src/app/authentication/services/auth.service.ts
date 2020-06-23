import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/System/Types/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  createUser(payload){
    return this.http.post("https://localhost:5003/api/Users/Create", payload)

  }
  getUserList(){
    return this.http.get<User[]>("https://localhost:5003/api/Users")
  }
}
