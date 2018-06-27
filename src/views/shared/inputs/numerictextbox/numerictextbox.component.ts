import { Component,Input,OnInit,ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'pt-numerictextbox',
  templateUrl: './numerictextbox.html',
  styleUrls: ['./numerictextbox.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NumericTextboxComponent implements OnInit {
  _id:string;
  _label:string;
  _required:boolean;
  _moreClass:string;
  _model:any;
  _readonly:boolean;
  _type:string;
  _disabled:boolean;
  _classLabel:string;
  _classField:string;
  _horizontalForm:boolean;
  _format:any;
  _step:number;
  _min:number;
  _max:number;

  @Input() id:string;
  @Input() label:string;
  @Input() required:boolean=false;
  @Input() moreClass:string;
  @Input() model:any;
  @Input() readonly:boolean=false;
  @Input() type:string="text";
  @Input() disabled:boolean=false;
  @Input() classLabel:string="col-sm-2";
  @Input() classField:string="col-sm-10";
  @Input() horizontalForm:boolean=false;
  @Input() format:any='n0';//https://www.telerik.com/kendo-angular-ui/components/inputs/numerictextbox/formats/
  @Input() step:number=1;
  @Input() min:number=0;
  @Input() max:number;
  constructor() {
  }
  ngOnInit(){
    this._id=this.id;
    this._label=this.label;
    this._required=this.required;
    this._moreClass=this.moreClass;
    this._model=this.model;
    this._readonly=this.readonly;
    this._type=this.type;
    this._disabled=this.disabled;
    this._classLabel=this.classLabel;
    this._classField=this.classField;
    this._horizontalForm=this.horizontalForm;
    this._format=this.format;
    this._step=this.step;
    this._min=this.min;
    this._max=this.max;
  }
}
