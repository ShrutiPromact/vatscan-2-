import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { OpenStockComponent } from './open-stock/open-stock.component';
import { SalesComponent } from './sales/sales.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { ExpenseComponent } from './expense/expense.component';
import { BankComponent } from './bank/bank.component';
import { ScannedDocumentComponent } from './scanned-document/scanned-document.component';
import { ReportsComponent } from './reports/reports.component';
import { CustomerComponent } from './customer/customer.component';
import { SupplierComponent } from './supplier/supplier.component';
import { RecordsComponent } from './records/records.component';
import { SupportSystemComponent } from './support-system/support-system.component';

const routes: Routes = [
  { path: 'openStock', component: OpenStockComponent },
  { path: 'sales', component: SalesComponent },
  { path: 'purchase', component: PurchaseComponent },
  { path: 'expense', component: ExpenseComponent },
  { path: 'bank', component: BankComponent },
  { path: 'scanDocument', component: ScannedDocumentComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'supplier', component: SupplierComponent },
  { path: 'records', component: RecordsComponent },
  { path: 'supportSystem', component: SupportSystemComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})


export class AppRoutingModule { }
