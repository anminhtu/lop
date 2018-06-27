import { Component ,AfterContentInit} from '@angular/core';
import {Router, Event } from '@angular/router';
import { Toast, BodyOutputType, ToasterConfig } from 'angular2-toaster';
declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  AfterContentInit {
  toastConfigSetup:any;
  
  constructor(private router: Router) {  
    this.router.events.subscribe((data: Event) => {       
      jQuery(".form-base .card-body").css({height:jQuery(window).height()-220});
    });
  }
  ngAfterContentInit() {
    var self = this;
    jQuery(".form-base .card-body").css({height:jQuery(window).height()-220});
    jQuery(window).resize(function () {
      jQuery(".form-base .card-body").css({height:jQuery(window).height()-220});
    });
    this.toastConfigSetup = new ToasterConfig({
      timeout: 10000,
      mouseoverTimerStop: false,
      showCloseButton: true,
      positionClass: "toast-bottom-right"
    });
  }
}
