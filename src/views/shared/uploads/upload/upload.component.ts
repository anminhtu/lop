import { Component,Input,OnInit,ViewEncapsulation,ElementRef } from '@angular/core';
import { FileRestrictions, SelectEvent, ClearEvent, RemoveEvent, FileInfo ,UploadEvent} from '@progress/kendo-angular-upload';
import { CommonService } from '../../../../services/common-service';
@Component({
  selector: 'pt-upload',
  templateUrl: './upload.html',
  styleUrls: ['./upload.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UploadComponent implements OnInit {
  _id:string;
  _label:string;
  _required:boolean;
  _moreClass:string;
  _model:any;
  _type:string;
  _disabled:boolean;
  _classLabel:string;
  _classField:string;
  _horizontalForm:boolean;
  _allowedExtensions: string[];
  _maxFileSize:number;
  _minFileSize:number;
  _uploadRestrictions:FileRestrictions;
  _multiple:boolean;
  _batch:boolean;
  _template:any;
  _autoUpload:boolean;

  _uploadSaveUrl:string; // should represent an actual API endpoint
  _uploadRemoveUrl:string; // should represent an actual API endpoi
  events: string[] = [];
  imagePreviews: FileInfo[] = [];

  @Input() id:string;
  @Input() label:string;
  @Input() required:boolean=false;
  @Input() moreClass:string;
  @Input() model:any;
  @Input() type:string="text";
  @Input() disabled:boolean=false;
  @Input() classLabel:string="col-sm-2";
  @Input() classField:string="col-sm-10";
  @Input() horizontalForm:boolean=false;
  @Input() allowedExtensions:string[]=['.jpg', '.png'];
  @Input() maxFileSize:number=104857600;
  @Input() minFileSize:number=0;
  @Input() multiple:boolean=false;
  @Input() batch:boolean=true;
  @Input() template:any;
  @Input() autoUpload:boolean=true;
  @Input() uploadSaveUrl:string=CommonService.baseUrl+ "Common/SaveFileUpload";
  @Input() uploadRemoveUrl:string=CommonService.baseUrl+ "Common/RemoveFileUpload";
  

  constructor() {
  }
  ngOnInit(){
    this._id=this.id;
    this._label=this.label;
    this._required=this.required;
    this._moreClass=this.moreClass;
    this._model=this.model;
    this._type=this.type;
    this._disabled=this.disabled;
    this._classLabel=this.classLabel;
    this._classField=this.classField;
    this._horizontalForm=this.horizontalForm;
    
    this._allowedExtensions=this.allowedExtensions;
    this._maxFileSize=this.maxFileSize;
    this._minFileSize=this.minFileSize;
    this._multiple=this.multiple;
    this._batch=this.batch;
    this._template=this.template;
    this._autoUpload=this.autoUpload;
    
    this._uploadRestrictions = {
      allowedExtensions: this._allowedExtensions,
      maxFileSize:this._maxFileSize,
      minFileSize: this._minFileSize
    };
    this._uploadSaveUrl=this.uploadSaveUrl;
    this._uploadRemoveUrl=this.uploadRemoveUrl;
  }
 nt

  public clearEventHandler(e: ClearEvent): void {
    this.imagePreviews = [];
  }

  public completeEventHandler() {
  }

  public removeEventHandler(e: RemoveEvent): void {
    const index = this.imagePreviews.findIndex(item => item.uid === e.files[0].uid);

    if (index >= 0) {
      this.imagePreviews.splice(index, 1);
    }
  }

  public selectEventHandler(e: SelectEvent): void {
    const that = this;

    e.files.forEach((file) => {
      if (!file.validationErrors) {
        const reader = new FileReader();

        reader.onload = function (ev:any) {
          const image:any = {
            src: ev.target.result,
            uid: file.uid
          };

          that.imagePreviews.unshift(image);
        };

        reader.readAsDataURL(file.rawFile);
      }
    });
  }
  uploadEventHandler(e: UploadEvent) {
  }
}
