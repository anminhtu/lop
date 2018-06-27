import { Component,OnInit, ViewChild,TemplateRef } from '@angular/core';
import {Router } from '@angular/router';
@Component({
  selector: 'pt-user-create',
  templateUrl: './create.html',
  styleUrls: ['./create.scss']
})
export class UserCreateComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit(){   
  }
}
