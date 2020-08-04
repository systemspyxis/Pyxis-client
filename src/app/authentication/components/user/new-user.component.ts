import { Component, OnInit, Input } from '@angular/core';

import { NgWizardConfig, THEME, StepChangedArgs, NgWizardService } from 'ng-wizard';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  @Input()
  closeDialod: any;
  config: NgWizardConfig = {
    selected: 0,
    theme: THEME.arrows,
    toolbarSettings: {
      toolbarExtraButtons: [
        {
          text: 'Finish',
          class: 'btn btn-info',
          event: () => {
            //this.closeDialod.open = false;
            this.createUserPayload = {
              ...this.UserDetailForm.value,
              groups: [...this.userGroups],
              ...this.UserAccountForm.value
            }
            this.saveNewUser(this.createUserPayload)
            console.log("createuser", this.createUserPayload)
            
            
          }
        }
      ]
    }
  };
  UserDetailForm: FormGroup;
  UserMembershipForm: FormGroup;
  UserAccountForm: FormGroup;

  userGroups = [];
  createUserPayload = {}
  constructor(
    private ngWizardService: NgWizardService, private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.initializeFormGroups();
  }

  ngOnInit() {
  }
  stepChanged(args: StepChangedArgs) {
    console.log(args.step);
  }
  showNextStep(event?: Event) {
    console.log("next");
    this.ngWizardService.next();
  }
  saveNewUser(payload) {
    this.authService.createUser(payload).subscribe(()=>{
      this.UserDetailForm.reset();
      this.userGroups=[];
      this.UserAccountForm.reset();
      this.closeDialod.open = false;
      this.ngWizardService.reset()
    });
  }
  initializeFormGroups() {
    this.UserDetailForm = this.fb.group(
      {
        username: ['', [Validators.required,Validators.minLength(5)]],
        password: ['', [Validators.required]],
        firstname: ['', [Validators.required]],
        lastname: ['', [Validators.required]],
        fullName: ['', []],
        description: ['', []],
        admin: ['', []]

      }
    );
    this.UserMembershipForm = this.fb.group(
      {
        username: ['hey', []],
        password: ['', []],
        firstname: ['', []],
        lastname: ['', []],
        fullName: ['', []],
        description: ['', []],
        admin: ['', []]

      }
    );
    this.UserAccountForm = this.fb.group(
      {
        email: ['', [Validators.required]],
        mobile: ['', []]

      }
    );
  }


}
