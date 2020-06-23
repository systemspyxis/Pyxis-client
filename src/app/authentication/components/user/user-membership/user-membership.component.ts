import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { SecurityGroup } from 'src/app/System/Types/security-group';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-membership',
  templateUrl: './user-membership.component.html',
  styleUrls: ['./user-membership.component.css']
})
export class UserMembershipComponent implements OnInit {
  availableGroups: SecurityGroup[];
  
  @Input()
  userGroups: SecurityGroup[];
  cols: any[];
  constructor() { }


  ngOnInit(): void {

    this.availableGroups=[
      {
        id:"id",
        description:"Admin",
        name:"Admin"

      }
    ]
    

    
  }

}
