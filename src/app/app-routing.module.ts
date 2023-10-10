import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewPurchaseComponent } from './components/new-purchase/new-purchase.component';
import { NewSaleComponent } from './components/new-sale/new-sale.component';
import { PurchaseListComponent } from './components/purchase-list/purchase-list.component';
import { SaleListComponent } from './components/sale-list/sale-list.component';
import { StockComponent } from './components/stock/stock.component';

const routes: Routes = [
  {
    path:'Dashboard',
    component:DashboardComponent
  },
  {
    path:'purchase',
    component:NewPurchaseComponent
  },
  {
    path:'sale',
    component:NewSaleComponent
  },
  {
    path:'purchase-List',
    component:PurchaseListComponent
  },
  {
    path:'sale-List',
    component:SaleListComponent
  },
  {
    path:'stock',
    component:StockComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
