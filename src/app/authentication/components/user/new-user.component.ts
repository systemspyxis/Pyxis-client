import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'User'},
      {label: 'Member Of'}, 
      {label: 'Account'}
  ];

  }

}
