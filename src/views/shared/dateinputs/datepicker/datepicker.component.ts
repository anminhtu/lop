import { Component,Input,OnInit,ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'pt-datepicker',
  templateUrl: './datepicker.html',
  styleUrls: ['./datepicker.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DatepickerComponent implements OnInit {
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
  _format:string;
  _min:Date;
  _max:Date;

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
  @Input() min:Date;
  @Input() max:Date;
  @Input() format:string="MM/dd/yyyy";

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
    this._min=this.min;
    this._max=this.max;
    this._format=this.format;
  }
  onBlur(): void {
  }

  onFocus(): void {
  }

  onOpen(): void {
  }

  onClose(): void {
  }

  onChange(value: Date): void {
  }

}
