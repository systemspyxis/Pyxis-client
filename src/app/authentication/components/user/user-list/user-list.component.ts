import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/System/Types/user';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/authentication/services/auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  preserveWhitespaces:true
})
export class UserListComponent implements OnInit {
  displayNewUserDialog:any={open:false};
  users$: Observable<User[]>;

  cols: any[];

  constructor(private authService: AuthService ) { }

  ngOnInit(): void {
    
    // this.users = [
    //   { 
    //     id: '1', 
    //     username: "admin" ,
    //     attempts:0,
    //     description:"admin",
    //     disabled:true,
    //     displayName:"admin",
    //     firstName:"admin",
    //     lastLogin:"",
    //     lastName:"",
    //     locked:true,
    //     password:"",
    //     created:"",
    //     admin:true
    //   }
    // ]
    this.users$=this.authService.getUserList()
    this.cols = [
      { field: 'username', header: 'Username' },
      { field: 'displayName', header: 'Name' },
      { field: 'disabled', header: 'Active' },
      { field: 'description', header: 'Description' }
    ];
  }

  showNewUserDialog() {
    this.displayNewUserDialog.open = true;
}

}
