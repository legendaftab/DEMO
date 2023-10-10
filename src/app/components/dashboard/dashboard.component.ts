import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private http:HttpClient){
   this.loadData();
  }

  dashArray:any[]=[];

  loadData(){
    this.http.get("https://freeapi.miniprojectideas.com/api/Inventory/GetDashboardData").subscribe((res:any)=>{
      this.dashArray=res.data;
    })
  }
}
