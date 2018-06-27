import { Component,OnInit, ViewChild,TemplateRef } from '@angular/core';
import {GridComponent } from 'src/views/shared/grid/grid.component';
@Component({
  selector: 'app-my-case',
  templateUrl: './my-case.component.html',
  styleUrls: ['./my-case.component.scss']
})
export class MyCaseComponent implements OnInit {
  gridDataSource:any;
  items:any[]=[];
  gridColumns:any[]=[];
  @ViewChild('actionActiveTemplate')  actionActiveTemplate : TemplateRef<any>;
  @ViewChild(GridComponent) grid;
  constructor() { }

  ngOnInit() {
    this.gridColumns=[
      {Field:"No",Title:"No.",Width:50},
      {Field:"CaseNumber",Title:"Case Number",Width:140},
      {Field:"FirstName",Title:"First Name",MinWidth:70},
      {Field:"LastName",Title:"Last Name",MinWidth:70},
      {Field:"Gender",Title:"Gender",Width:80},
      {Field:"Age",Title:"Age",Width:100},
     // {Field:"Address",Title:"Address",Width:200},
      {Field:"DrugName",Title:"Drug Name",MinWidth:250},
      {Field:"OrderDate",Title:"Order Date",Width:120},
      {Field:"Status",Title:"Status",MinWidth:250},
      {Field:"Active",Title:"",Width:105,Template:this.actionActiveTemplate}
    ];
    this.items=[
      {Id:1,No: "1", CaseNumber: "LOP000001",FirstName:"Tom", LastName: "Riddle",Gender:"Male",Age:"50", DrugName: "Hair loss", OrderDate: "05/24/2018", Status: "Waiting for patient to respond"},
      {Id:1,No: "2", CaseNumber: "LOP000002",FirstName:"Tom", LastName: "Riddle",Gender:"Male",Age:"35", DrugName: "PE_ED", OrderDate: "05/24/2018", Status: "Patient responsed"},
      {Id:1,No: "3", CaseNumber: "LOP000003",FirstName:"Tom", LastName: "Riddle",Gender:"Male",Age:"25", DrugName: "Hair loss", OrderDate: "05/24/2018", Status: "Accepted"},
      {Id:1,No: "4", CaseNumber: "LOP000004",FirstName:"Tom", LastName: "Riddle",Gender:"Male",Age:"15", DrugName: "Cold Sore", OrderDate: "05/24/2018", Status: "Completed"},
      {Id:1,No: "5", CaseNumber: "LOP000005",FirstName:"Tom", LastName: "Riddle",Gender:"Male",Age:"28", DrugName: "Cold Sore", OrderDate: "05/24/2018", Status: "Waiting for patient to respond"},
      {Id:1,No: "6", CaseNumber: "LOP000006",FirstName:"Tom", LastName: "Riddle",Gender:"Male",Age:"46", DrugName: "Cold Sore", OrderDate: "05/24/2018", Status: "Rejected"},
      {Id:1,No: "7", CaseNumber: "LOP000007",FirstName:"Tom", LastName: "Riddle",Gender:"Male",Age:"50", DrugName: "Hair loss", OrderDate: "05/24/2018", Status: "Patient responsed"},

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
