import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/System/Types/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];

  cols: any[];

  constructor() { }

  ngOnInit(): void {
    this.users = [
      { 
        id: '1', 
        username: "admin" ,
        attempts:0,
        description:"admin",
        disabled:true,
        displayName:"admin",
        firstName:"admin",
        lastLogin:"",
        lastName:"",
        locked:true,
        password:""
      }
    ]
    this.cols = [
      { field: 'username', header: 'Username' },
      { field: 'displayName', header: 'Name' },
      { field: 'disabled', header: 'Active' },
      { field: 'description', header: 'Description' }
    ];
  }

}
