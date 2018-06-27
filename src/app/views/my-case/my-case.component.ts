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
      {Field:"No",Title:"No.",MinWidth:100},
      {Field:"PatientName",Title:"Patient Name",MinWidth:100},
      {Field:"Gender",Title:"Gender",Width:150},
      {Field:"Age",Title:"Age",Width:250},
      {Field:"Address",Title:"Address",Width:250},
      {Field:"DrugName",Title:"Drug Name",Width:250},
      {Field:"OrderDate",Title:"Order Date",Width:250},
      {Field:"Active",Title:"",Width:105,Template:this.actionActiveTemplate}
    ];
    this.items=[
      {Id:1,No: "1",PatientName:"Will",Gender:"Male",Age:"50", Address: "Houston", DrugName: "Drug 1", OrderDate: "05/24/2018 8:50 am"},
      {Id:1,No: "2",PatientName:"Will",Gender:"Male",Age:"50", Address: "Houston", DrugName: "Drug 1", OrderDate: "05/24/2018 8:50 am"},
      {Id:1,No: "3",PatientName:"Will",Gender:"Male",Age:"50", Address: "Houston", DrugName: "Drug 1", OrderDate: "05/24/2018 8:50 am"},
      {Id:1,No: "4",PatientName:"Will",Gender:"Male",Age:"50", Address: "Houston", DrugName: "Drug 1", OrderDate: "05/24/2018 8:50 am"},
      {Id:1,No: "5",PatientName:"Will",Gender:"Male",Age:"50", Address: "Houston", DrugName: "Drug 1", OrderDate: "05/24/2018 8:50 am"},
      {Id:1,No: "6",PatientName:"Will",Gender:"Male",Age:"50", Address: "Houston", DrugName: "Drug 1", OrderDate: "05/24/2018 8:50 am"},
      {Id:1,No: "7",PatientName:"Will",Gender:"Male",Age:"50", Address: "Houston", DrugName: "Drug 1", OrderDate: "05/24/2018 8:50 am"},

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
