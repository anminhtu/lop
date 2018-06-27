import { Component,OnInit, ViewChild,TemplateRef } from '@angular/core';
import {Router } from '@angular/router';
@Component({
  selector: 'pt-user-update',
  templateUrl: './update.html',
  styleUrls: ['./update.scss']
})
export class UserUpdateComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit(){   
  }
}
