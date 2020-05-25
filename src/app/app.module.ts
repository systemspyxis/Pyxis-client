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

@NgModule({
  declarations: [
    AppComponent,
    CaptureChequeComponent,
    AuthorizeChequeComponent,
    ExportChequeComponent,
    AdminComponentComponent
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
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
