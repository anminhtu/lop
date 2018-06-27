import { Component,OnInit, ViewChild,TemplateRef } from '@angular/core';
import { GridComponent } from '../shared/grid/grid.component';

@Component({
  selector: 'pt-user',
  templateUrl: './user.html',
  styleUrls: ['./user.scss']
})
export class UserComponent implements OnInit {
  gridDataSource:any;
  items:any[]=[];
  gridColumns:any[]=[];
  @ViewChild('actionActiveTemplate')  actionActiveTemplate : TemplateRef<any>;
  @ViewChild(GridComponent) grid;
  ngOnInit(){
    this.gridColumns=[
      {Field:"Name",Title:"Name",MinWidth:100},
      {Field:"Phone",Title:"Phone",Width:150},
      {Field:"Email",Title:"Email",Width:250},
      {Field:"Active",Title:"",Width:105,Template:this.actionActiveTemplate}
    ];
    this.items=[
      {Id:1,Name:"Pham Tram1",Phone:"(895) 896-69875",Email:"pham.tram2caminois.com",Active:true},
      {Id:2,Name:"Pham Tram2",Phone:"(895) 896-69875",Email:"pham.tram2caminois.com",Active:false},
      {Id:3,Name:"Pham Tram3",Phone:"(895) 896-69875",Email:"pham.tram2caminois.com",Active:true},
      {Id:4,Name:"Pham Tram4",Phone:"(895) 896-69875",Email:"pham.tram2caminois.com",Active:true},
      {Id:5,Name:"Pham Tram5",Phone:"(895) 896-69875",Email:"pham.tram2caminois.com",Active:true},
      {Id:6,Name:"Pham Tram6",Phone:"(895) 896-69875",Email:"pham.tram2caminois.com",Active:false},
      {Id:7,Name:"Pham Tram7",Phone:"(895) 896-69875",Email:"pham.tram2caminois.com",Active:true},
      {Id:8,Name:"Pham Tram8",Phone:"(895) 896-69875",Email:"pham.tram2caminois.com",Active:true},
      {Id:9,Name:"Pham Tram9",Phone:"(895) 896-69875",Email:"pham.tram2caminois.com",Active:false},
      {Id:10,Name:"Pham Tram10",Phone:"(895) 896-69875",Email:"pham.tram2caminois.com",Active:true},
      {Id:11,Name:"Pham Tram11",Phone:"(895) 896-69875",Email:"pham.tram2caminois.com",Active:true},
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
  edit(id:any){
    console.log(id);
  }
}
