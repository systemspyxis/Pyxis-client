import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import 'hammerjs';

import { AppComponent } from './app.component';
import { CaptureChequeComponent } from './capture-cheque/capture-cheque.component';
import { RouterModule } from '@angular/router';
import { routeConfig } from './router-config';
import { AuthorizeChequeComponent } from './authorize-cheque/authorize-cheque.component';
import { ExportChequeComponent } from './export-cheque/export-cheque.component';

@NgModule({
  declarations: [
    AppComponent,
    CaptureChequeComponent,
    AuthorizeChequeComponent,
    ExportChequeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
