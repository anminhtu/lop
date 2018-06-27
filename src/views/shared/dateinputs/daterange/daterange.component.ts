import { Component,Input,OnInit,ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'pt-daterange',
  templateUrl: './daterange.html',
  styleUrls: ['./daterange.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DaterangeComponent implements OnInit {
  _horizontalForm:boolean;
  _format:string;
  _readonly:boolean;
  _required:boolean;
  _disabled:boolean;
  _moreClass:string;
  _classLabel:string;
  _classField:string;

  _idStart:string;
  _labelStart:string;
  _modelStart:any;
  _minStart:Date;
  _maxStart:Date;

  _idEnd:string;
  _labelEnd:string;
  _modelEnd:any;
  _minEnd:Date;
  _maxEnd:Date;

  @Input() required:boolean=false;
  @Input() moreClass:string;
  @Input() readonly:boolean=false;
  @Input() disabled:boolean=false;
  @Input() classLabel:string="col-sm-2";
  @Input() classField:string="col-sm-4";
  @Input() horizontalForm:boolean=false;
  @Input() format:string="MM/dd/yyyy";

  @Input() idStart:string;
  @Input() labelStart:string;
  @Input() modelStart:any;
  @Input() minStart:Date;
  @Input() maxStart:Date;

  @Input() idEnd:string;
  @Input() labelEnd:string;
  @Input() modelEnd:any;
  @Input() minEnd:Date;
  @Input() maxEnd:Date;
  constructor() {
  }
  ngOnInit(){
    this._required=this.required;
    this._moreClass=this.moreClass;
    this._readonly=this.readonly;
    this._disabled=this.disabled;
    this._classLabel=this.classLabel;
    this._classField=this.classField;
    this._horizontalForm=this.horizontalForm;
    this._format=this.format;

    this._idStart=this.idStart;
    this._labelStart=this.labelStart;
    this._modelStart=this.modelStart;
    this._minStart=this.minStart;
    this._maxStart=this.maxStart;

    this._idEnd=this.idEnd;
    this._labelEnd=this.labelEnd;
    this._modelEnd=this.modelEnd;
    this._minEnd=this.minEnd;
    this._maxEnd=this.maxEnd;
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
