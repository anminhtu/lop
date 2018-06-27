import { Component,Input,OnInit,ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'pt-maskedtextbox',
  templateUrl: './maskedtextbox.html',
  styleUrls: ['./maskedtextbox.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MaskedTextboxComponent implements OnInit {
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
  _masked:string;
  _maskValidation:boolean;
  _includeLiterals:boolean;
  _clearIfNotValid:boolean;

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
  @Input() masked:string;
  @Input() maskValidation:boolean=true;
  @Input() includeLiterals:boolean=false;
  @Input() clearIfNotValid:boolean=true;

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
    this._masked=this.masked;
    this._maskValidation=this.maskValidation;
    this._includeLiterals=this.includeLiterals;
    this._clearIfNotValid=this.clearIfNotValid;
  }
  handleBlur(){
    if(this._clearIfNotValid && this._model!=undefined)
    {
      var maskedTrim=this._masked.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '');
      var modelTrim=this._model.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '');
      if(maskedTrim.length!=modelTrim.length)
      {
        this._model=null;
      }
    }
  }
}
