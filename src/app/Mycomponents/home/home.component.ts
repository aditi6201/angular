import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { setAriaColCount } from 'ag-grid-community/dist/lib/utils/aria';
import { account } from 'C:/Users/Aditi/Desktop/Angular/my-app/src/app/models/account';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public adddata: boolean=false;
  public gridApi: any;
  public rowSelection='single';
  public user: string="";
  public myData: any[];
  public data: account[];
  public modaldata: account= new account();
  public inputname: string;
  public inputacn: string;
  public inputbal: string;
  title = 'Account Management';

  constructor(){}

  ngOnInit():void{
    
    var griddata= JSON.parse(localStorage.getItem("testdata"));
    if(!!griddata && griddata.length>0){
      this.myData=griddata;
    }
    else{
      localStorage.setItem("testdata",JSON.stringify(this.rowData));
      this.myData=this.rowData
    }
  }

  public colDefs: ColDef[] = [
    { field: 'Name'},
    { field: 'AccountNumber'},
    { field: 'Balance' }
  ];
 
  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  }
  add(){
    this.adddata=true;
  }

  delete(){
    var data=JSON.parse(localStorage.getItem("testdata"));
    data=data.filter((el: { Name: string; })=>el.Name!==this.user);
    localStorage.setItem("testdata",JSON.stringify(data));
    window.location.reload();
  }
  save(){
    this.modaldata.Name=this.inputname;
    this.modaldata.AccountNumber=this.inputacn;
    this.modaldata.Balance=this.inputbal;
    this.data=JSON.parse(localStorage.getItem("testdata"));
    this.data.push(this.modaldata);
    localStorage.setItem("testdata",JSON.stringify(this.data));
    window.location.reload();
  }
  close(){
    this.adddata=false;
  }
  onSelectionChanged(event:any){
    const selectedRows= this.gridApi.getSelectedRows();
    this.user=selectedRows.length===1?selectedRows[0].Name:'';
  }
  onGridReady(params:any){
    this.gridApi=params.api;
  }
    rowData: any[] = [
        {Name:'ABC',AccountNumber:"5345784769" , Balance:"657656" },  ];
}

