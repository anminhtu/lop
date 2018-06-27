import { OnInit, Component, AfterContentInit , Input, Output, EventEmitter,ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { GridQueryInfo } from '../../../models/common-model';
import { BaseService } from '../../../services/base-service';
declare var jQuery: any;
declare var bootbox:any;

@Component({
  selector: 'pt-grid',
  templateUrl: './grid.html',
  styleUrls: ['./grid.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GridComponent implements OnInit, AfterContentInit{
  height:number;
  gridDataSource:any;
  gridColumns:any[]=[];
  skip: number=0;
  pageSize: number=10;
  take: number;
  sortField: string;
  sortOrder: number;
  searchString: string;
  additionalSearchString:string;
  masterName:string;
  gridQueryInfo: GridQueryInfo;
  headerTemplate:any=null;
  useHeaderDefault:boolean;
  useActionDefault:boolean;
  pageable:boolean;
  
  @Input() inputGridColumns: any[];
  @Input() inputGridDataSource: any;
  @Input() inputMasterName: string;
  @Input() inputAdditionalSearchString: string;
  @Input() inputHeaderTemplate: any;
  @Input() inputUseHeaderDefault: boolean=true;
  @Input() inputUseActionDefault: boolean=true;
  @Input() inputPageable: boolean=true;
  @Input() inputHeight: number;
  
  
  @Output() extOnDataBound = new EventEmitter<any>();
  @Output() extOnPageChange = new EventEmitter<any>();

  constructor(private baseService:BaseService,private router: Router){

  }
  ngOnInit(){
    this.gridColumns = this.inputGridColumns;
    this.gridDataSource = this.inputGridDataSource;
    this.masterName=this.inputMasterName;
    this.additionalSearchString=this.inputAdditionalSearchString;
    this.headerTemplate=this.inputHeaderTemplate;
    this.useHeaderDefault=this.inputUseHeaderDefault;
    this.useActionDefault=this.inputUseActionDefault;
    this.pageSize = 10;
    this.sortOrder = -1;
    this.sortField = "";
    this.skip = 0;
    this.take = (this.pageSize * this.skip) + this.pageSize;
    this.pageable=this.inputPageable;
    this.height=this.inputHeight;
  }
  ngAfterContentInit() {
    var self = this;
    if(this.inputHeight==null)
    {
      self.height=jQuery(window).height()-108;
      jQuery(window).resize(function () {
        self.height=jQuery(window).height()-108;
      });
    }
    this.setDataSource();
  }
  getCellWidthAuto(width:any,minWidth:any){
    if(width==null)
    {
      if(this.gridColumns!=null && this.gridColumns.length>0)
      {
        var widthScreen=jQuery(window).width();
        var totalWidth=this.gridColumns.filter((item)=>{
          return item.Width!=null;
        }).reduce((sum, item) => sum + item.Width, 0);
        if(widthScreen<totalWidth+minWidth+220)
        {
          return minWidth;
        }
      }
    }
    else
    {
      return width;
    }
  }
  setDataSource(){
    if(this.inputGridDataSource==null)
    {
      this.getDataForGrid();
    }
    else{      
      this.gridDataSource=this.inputGridDataSource;
    }
  }
  getDataForGrid() {
    var searchText = this.searchString != undefined ? this.searchString : "";
    searchText = "<SearchTerms>" + searchText + "</SearchTerms>";
    searchText = btoa('<AdvancedQueryParameters>' + searchText + '</AdvancedQueryParameters>');
    var sort=new Array();
    var dir="asc";
    if (this.sortField!= undefined&&this.sortField!="") {
      if(this.sortOrder>0){
        dir="desc";
      }
    }
    this.gridQueryInfo = { skip: this.skip, take: this.take, pageSize: this.pageSize, searchString: searchText,additionalSearchString:this.additionalSearchString, sortField: this.sortField,sortOrder:dir};
    var DataSourceSubscription = this.baseService.getDataForGrid(this.masterName, this.gridQueryInfo)
      .subscribe(
      resultData => {
        if (resultData != undefined && resultData != null) {
          this.gridDataSource = resultData;
        }
        this.extOnDataBound.emit(resultData);
      },
      (err: any) => {
        this.baseService.handleError(err);
      });
  }
  pageChange(event: PageChangeEvent): void {
      this.skip = event.skip;
      if(this.inputGridDataSource==null)
      {
        this.getDataForGrid();
      }
      else{      
        this.extOnPageChange.emit(this.skip);
      }
  }
  onKey(event: any) {
    if(event.key=="Enter")
    {
      this.search();
    }
  }
  search(){
    this.setDataSource();
  }
  add(){    
    this.router.navigate([this.masterName.toLocaleLowerCase()+"/add"]);
  }
  edit(id:number){
    this.router.navigate([this.masterName.toLocaleLowerCase()+"/update/"+id]);
  }
  delete(id:number){
    var self=this;
    bootbox.confirm({ 
      size: "small",
      message: "Are you sure that you want to delete this record?", 
      callback: function(result){ /* result is a boolean; true = OK, false = Cancel*/
        if(result)
        {
          self.baseService.deleteById(self.masterName,id)
          .subscribe(
          resultData => {
            self.search();
          },
          (err: any) => {
            self.baseService.handleError(err);
          });
        }
      }
    })
  }
}
