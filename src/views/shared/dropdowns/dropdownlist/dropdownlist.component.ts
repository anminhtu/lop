import { Component,Input,OnInit,AfterContentInit,Output,EventEmitter,ViewEncapsulation } from '@angular/core';
import { BaseService } from '../../../../services/base-service';
import { LookupQueryInfo } from '../../../../models/common-model';
import { BroadcastService } from '../../../../services/broadcast-service';

@Component({
  selector: 'pt-dropdownlist',
  templateUrl: './dropdownlist.html',
  styleUrls: ['./dropdownlist.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DropdownlistComponent implements OnInit,AfterContentInit {
  _id:string;
  _label:string;
  _required:boolean;
  _moreClass:string;
  _model:any;
  _readonly:boolean;
  _placeHolder:string;
  _type:string;
  _disabled:boolean;
  _classLabel:string;
  _classField:string;
  _horizontalForm:boolean;
  _data:any;
  _filterable:boolean;
  _textField:string;
  _valueField:string;
  _valuePrimitive:boolean;
  _url:string;
  _queryInfo:LookupQueryInfo;
  _isAuthorize:boolean;
  _hierarchyKeyToSend:any;
  _hierarchyKeyToListen:any;
  _bind:boolean;

  @Input() id:string;
  @Input() label:string;
  @Input() required:boolean=false;
  @Input() moreClass:string;
  @Input() model:any;
  @Input() readonly:boolean=false;
  @Input() placeHolder:string="";
  @Input() type:string="text";
  @Input() disabled:boolean=false;
  @Input() classLabel:string="col-sm-2";
  @Input() classField:string="col-sm-10";
  @Input() horizontalForm:boolean=false;
  @Input() data:any;
  @Input() filterable:boolean=true;
  @Input() textField:string="DisplayName";
  @Input() valueField:string="KeyId";
  @Input() valuePrimitive:boolean=true;
  @Input() url:string;
  @Input() queryInfo:LookupQueryInfo=new LookupQueryInfo();
  @Input() isAuthorize:boolean=true;
  @Input() hierarchyKeyToSend:any;
  @Input() hierarchyKeyToListen:any;
  @Input() bind:boolean=false;
  
  constructor(private baseService:BaseService,private broadcastService:BroadcastService) {
  }
  ngOnInit(){
    this._id=this.id;
    this._label=this.label;
    this._required=this.required;
    this._moreClass=this.moreClass;
    this._model=this.model;
    this._readonly=this.readonly;
    this._placeHolder=this.placeHolder;
    this._type=this.type;
    this._disabled=this.disabled;
    this._classLabel=this.classLabel;
    this._classField=this.classField;
    this._horizontalForm=this.horizontalForm;
    this._data=this.data;
    this._filterable=this.filterable;
    this._textField=this.textField;
    this._valueField=this.valueField;
    this._valuePrimitive=this.valuePrimitive;
    this._url=this.url;
    this._queryInfo=this.queryInfo;
    this._isAuthorize=this.isAuthorize;
    this._hierarchyKeyToSend=this.hierarchyKeyToSend;
    this._hierarchyKeyToListen=this.hierarchyKeyToListen;
    this._bind=this.bind;
  }
  ngAfterContentInit(){
    if(this._bind)
    {
      this.getDataForLookup();
    }    
    if(this._hierarchyKeyToListen!=undefined && this._hierarchyKeyToListen!=null)
    {
      this.broadcastService.on(this._hierarchyKeyToListen, (event) => {
        this._queryInfo.ParameterDependencies="{"+this._hierarchyKeyToListen+":"+event.message+"}";
        this.getDataForLookup();
      });
    }
  }
  getDataForLookup(){

    if(this._url!=undefined && this._url!=null && this._url!="" && (this.data==null ||this.data==undefined))
    {
      this.baseService.getListLookupItem(this._url,this._queryInfo,this._isAuthorize).subscribe(
        resultData => {
          if (resultData != undefined && resultData != null) {
            this._data=resultData;
          }
        },
        (err: any) => {
          this.baseService.handleError(err);
        });
    }
    else
    {
      if( this.data!=undefined && this.data!=null)
      {
        this._data = this.data.filter((s) => this._queryInfo.Query!=undefined && this._queryInfo.Query!=null && this._queryInfo.Query!=""? s.toLowerCase().indexOf(this._queryInfo.Query.toLowerCase()) !== -1:true);        
      }
    }
    this._bind=true;
  }
  valueChange(value: any) {
    if(this._hierarchyKeyToSend!=undefined && this._hierarchyKeyToSend!=null)
    {
      this.broadcastService.broadcast({
        name: this._hierarchyKeyToSend,
        message: value
      });
    }    
  }

  selectionChange(value: any) {
  }
  timer:any=null;
  filterChange(filter: any) {
    if(this.timer!=null)
    {
      clearTimeout(this.timer);
    }
    this.timer=setTimeout(() => {  
      this._queryInfo.Query=filter;  
      this.getDataForLookup();
    }, 500);
  }

  open() {
  }

  close() {
  }

  focus() {
    if(this._bind==false)
    {
      this.getDataForLookup();
    }
  }

  blur() {
  }
}
