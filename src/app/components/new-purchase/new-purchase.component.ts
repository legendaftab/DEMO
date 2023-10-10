import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-new-purchase',
  templateUrl: './new-purchase.component.html',
  styleUrls: ['./new-purchase.component.css']
})
export class NewPurchaseComponent implements OnInit{


purchasedObj:any={
  "purchaseId": 0,
  "purchaseDate": "2023-09-26T04:29:16.132Z",
  "productId": 0,
  "quantity": 0,
  "supplierName": "",
  "invoiceAmount": 0,
  "invoiceNo": ""
}

productList:any[]=[];

constructor(private http:HttpClient){
 
}
ngOnInit():void{
   this.getAllProduct();
}

getAllProduct(){
  this.http.get("https://freeapi.miniprojectideas.com/api/Inventory/GetAllProducts").subscribe((res:any)=>{
      this.productList=res.data;
  })
}
onSave(){
  this.http.post("https://freeapi.miniprojectideas.com/api/Inventory/CreateNewPurchase",this.purchasedObj).subscribe((res:any)=>{
    if(res.result){
      alert("purchase done successfully")
    }else{
      alert(res.message);
    }
  },error=>{
    alert(JSON.stringify(error.error))
  })
}
}
