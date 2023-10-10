import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-sale',
  templateUrl: './new-sale.component.html',
  styleUrls: ['./new-sale.component.css']
})
export class NewSaleComponent {

  saleObj:any={
    "saleId": 0,
    "invoiceNo": "",
    "customerName": "",
    "mobileNo": "",
    "saleDate": "2023-09-26T06:02:48.975Z",
    "productId": 0,
    "quantity": 0,
    "totalAmount": 0
  }
  
  saleList:any[]=[];
  
  constructor(private http:HttpClient){
   
  }
  ngOnInit():void{
     this.getAllProduct();
  }
  
  getAllProduct(){
    this.http.get("https://freeapi.miniprojectideas.com/api/Inventory/GetAllProducts").subscribe((res:any)=>{
        this.saleList=res.data;
    })
  }
  onSave(){
    this.http.post("https://freeapi.miniprojectideas.com/api/Inventory/CreateNewSale",this.saleObj).subscribe((res:any)=>{
      if(res.result){
        alert("sale done successfully")
      }else{
        alert(res.message);
      }
    },error=>{
      alert(JSON.stringify(error.error))
    })
  }

  checkStock(){
    this.http.get("https://freeapi.miniprojectideas.com/api/Inventory/checkStockByProductId?productId=" +this.saleObj.productId).subscribe((res:any)=>{
      if(!res.result){
          alert("stock not available");
          this.saleObj.productId=0;
      }
    })
  }




}
