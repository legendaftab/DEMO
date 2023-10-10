import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewPurchaseComponent } from './components/new-purchase/new-purchase.component';
import { NewSaleComponent } from './components/new-sale/new-sale.component';
import { PurchaseListComponent } from './components/purchase-list/purchase-list.component';
import { SaleListComponent } from './components/sale-list/sale-list.component';
import { StockComponent } from './components/stock/stock.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewPurchaseComponent,
    NewSaleComponent,
    PurchaseListComponent,
    SaleListComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
