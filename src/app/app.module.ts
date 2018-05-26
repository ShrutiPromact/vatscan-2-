import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderTopComponent } from './header-top/header-top.component';
// material design
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material';
import { AppRoutingModule } from './/app-routing.module';
import { SalesComponent } from './sales/sales.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { ExpenseComponent } from './expense/expense.component';
import { BankComponent } from './bank/bank.component';
import { ScannedDocumentComponent } from './scanned-document/scanned-document.component';
import { ReportsComponent } from './reports/reports.component';
import { CustomerComponent } from './customer/customer.component';
import { SupplierComponent } from './supplier/supplier.component';
import { RecordsComponent } from './records/records.component';
import { OpenStockComponent } from './open-stock/open-stock.component';
import { SupportSystemComponent } from './support-system/support-system.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AccountComponent } from './account/account.component';
import { ForgotPasswordComponent } from './account/ForgotPassword.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderTopComponent,
    SalesComponent,
    PurchaseComponent,
    ExpenseComponent,
    BankComponent,
    ScannedDocumentComponent,
    ReportsComponent,
    CustomerComponent,
    SupplierComponent,
    RecordsComponent,
    OpenStockComponent,
    SupportSystemComponent,
    InvoiceComponent,
    AccountComponent,
    ForgotPasswordComponent
  ],
  entryComponents: [
    ForgotPasswordComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatDialogModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
