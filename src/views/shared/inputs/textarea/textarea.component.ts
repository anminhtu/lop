import { Component,Input,OnInit,ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'pt-textarea',
  templateUrl: './textarea.html',
  styleUrls: ['./textarea.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TextareaComponent implements OnInit {
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
  _rows:number;
  _height:number;
  _maxlength:number;

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
  @Input() rows:number=1;
  @Input() height:number;
  @Input() maxlength:number=9999999999;
  constructor() {
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
    this._rows=this.rows;
    this._height=this.height;
    this._maxlength=this.maxlength;
  }
}
