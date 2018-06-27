import { Component,OnInit, ViewChild,TemplateRef } from '@angular/core';
import { LookupQueryInfo } from '../../../models/common-model';
@Component({
  selector: 'pt-user-shared',
  templateUrl: './shared.html',
  styleUrls: ['./shared.scss']
})
export class UserSharedComponent implements OnInit {
  dataDropdown:any=[
    {KeyId:1,DisplayName:"aaa"},
    {KeyId:2,DisplayName:"bbb"},
    {KeyId:3,DisplayName:"ccc"}
  ];
  CountryId:number=5;
  State:number=1;
  ngOnInit(){   
  }
}
