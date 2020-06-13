import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import 'hammerjs';

import { AppComponent } from './app.component';
import { CaptureChequeComponent } from './capture-cheque/capture-cheque.component';
import { RouterModule } from '@angular/router';
import { routeConfig } from './router-config';
import { AuthorizeChequeComponent } from './authorize-cheque/authorize-cheque.component';
import { ExportChequeComponent } from './export-cheque/export-cheque.component';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import { AdminComponentComponent } from './Admin/admin-component/admin-component.component';
import { HomeComponent } from './Home/home/home.component';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenuItem} from 'primeng/api';
import { LoginComponent } from './authentication/components/login/login.component';
import {TabMenuModule} from 'primeng/tabmenu';
import { NewUserComponent } from './authentication/components/user/new-user.component';
import { NewGroupComponent } from './authentication/components/groups/new-group.component';
import { UserListComponent } from './authentication/components/user/user-list/user-list.component';
import { EditUserComponent } from './authentication/components/user/edit-user/edit-user.component';
import { GroupListComponent } from './authentication/components/groups/group-list/group-list.component';
import { EditGroupComponent } from './authentication/components/groups/edit-group/edit-group.component';



@NgModule({
  declarations: [
    AppComponent,
    CaptureChequeComponent,
    AuthorizeChequeComponent,
    ExportChequeComponent,
    AdminComponentComponent,
    HomeComponent,
    LoginComponent,
    NewUserComponent,
    NewGroupComponent,
    UserListComponent,
    EditUserComponent,
    GroupListComponent,
    EditGroupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routeConfig),
    BrowserAnimationsModule,
    TableModule,
    ToastModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    DialogModule,
    PanelMenuModule,
    TabMenuModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
