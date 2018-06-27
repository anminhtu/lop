import { Component,OnInit, ViewChild,TemplateRef } from '@angular/core';
import {GridComponent } from 'src/views/shared/grid/grid.component';

@Component({
  selector: 'app-available-case',
  templateUrl: './available-case.component.html',
  styleUrls: ['./available-case.component.scss']
})
export class AvailableCaseComponent implements OnInit {
  gridDataSource:any;
  items:any[]=[];
  gridColumns:any[]=[];
  @ViewChild('actionActiveTemplate')  actionActiveTemplate : TemplateRef<any>;
  @ViewChild(GridComponent) grid;
  constructor() { }
  ngOnInit() {
    this.gridColumns=[
      {Field:"No",Title:"No.",Width:50},
      {Field:"CaseNumber",Title:"Case Number",Width:150},
      {Field:"DrugName",Title:"Drug Name",MinWidth:250},
      {Field:"FirstName",Title:"First Name",MinWidth:100},
      {Field:"LastName",Title:"Last Name",MinWidth:100},
      {Field:"Gender",Title:"Gender",Width:100},
      {Field:"Age",Title:"Age",Width:100},
      {Field:"State",Title:"State",Width:100},
      {Field:"OrderDate",Title:"Order Date",Width:200},
      {Field:"Active",Title:"",Width:105,Template:this.actionActiveTemplate}
    ];
    this.items=[
      {Id:1,No: "1",CaseNumber : "LOP000001",DrugName: "Hair loss",FirstName:"Tom",LastName: "Riddle",Gender:"Male",Age:"50", State: "TX",  OrderDate: "05/24/2018 8:50 am"},
      {Id:1,No: "2",CaseNumber : "LOP000002",DrugName: "PE_ED",FirstName:"Tom",LastName: "Riddle",Gender:"Male",Age:"50", State: "TX", OrderDate: "05/24/2018 8:50 am"},
      {Id:1,No: "3",CaseNumber : "LOP000003",DrugName: "Cold Sore",FirstName:"Tom",LastName: "Riddle",Gender:"Male",Age:"50", State: "NY", OrderDate: "05/24/2018 8:50 am"},
      {Id:1,No: "4",CaseNumber : "LOP000004",DrugName: "Hair loss",FirstName:"Tom",LastName: "Riddle",Gender:"Male",Age:"50", State: "TX", OrderDate: "05/24/2018 8:50 am"},
      {Id:1,No: "5",CaseNumber : "LOP000005",DrugName: "PE_ED",FirstName:"Tom",LastName: "Riddle",Gender:"Male",Age:"50", State: "TX", OrderDate: "05/24/2018 8:50 am"},
      {Id:1,No: "6",CaseNumber : "LOP000006",DrugName: "Hair loss",FirstName:"Tom",LastName: "Riddle",Gender:"Male",Age:"50", State: "NY", OrderDate: "05/24/2018 8:50 am"},
      {Id:1,No: "7",CaseNumber : "LOP000007",DrugName: "Cold Sore",FirstName:"Tom",LastName: "Riddle",Gender:"Male",Age:"50", State: "TX", OrderDate: "05/24/2018 8:50 am"},
      {Id:1,No: "8",CaseNumber : "LOP000008",DrugName: "Hair loss",FirstName:"Tom",LastName: "Riddle",Gender:"Male",Age:"50", State: "TX", OrderDate: "05/24/2018 8:50 am"},
      {Id:1,No: "9",CaseNumber : "LOP000009",DrugName: "PE_ED",FirstName:"Tom",LastName: "Riddle",Gender:"Male",Age:"50", State: "TX", OrderDate: "05/24/2018 8:50 am"},
      {Id:1,No: "10",CaseNumber : "LOP0000010",DrugName: "Cold Sore",FirstName:"Tom",LastName: "Riddle",Gender:"Male",Age:"50", State: "TX", OrderDate: "05/24/2018 8:50 am"},
      {Id:1,No: "11",CaseNumber : "LOP0000011",DrugName: "Cold Sore",FirstName:"Tom",LastName: "Riddle",Gender:"Male",Age:"50", State: "TX", OrderDate: "05/24/2018 8:50 am"},

    ];
    this.gridDataSource={
      data:this.items.slice(this.grid.skip, this.grid.skip + this.grid.pageSize),
      total:this.items.length
    };
  }
  onPageChange(event:any)
  {    
    this.grid.gridDataSource={
      data:this.items.slice(event, event+ this.grid.pageSize),
      total:this.items.length
    };
  }
  active(id:any){
    console.log(id);
  }
}
