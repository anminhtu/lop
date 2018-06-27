import { Component } from '@angular/core';
import {Router } from '@angular/router';
declare var jQuery: any;

@Component({
  selector: 'pt-sidebar',
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})
export class SidebarComponent {
  constructor(private router: Router) { }
  ngAfterContentInit() {
    var self = this;
    if(jQuery(window).width()<=575)
    {
      jQuery("#sidebar-wrapper").removeClass("show");
    }
    jQuery("#sidebar-wrapper").css({height:jQuery(window).height()-60});
    jQuery(window).resize(function () {
      jQuery("#sidebar-wrapper").css({height:jQuery(window).height()-60});
      if(jQuery(window).width()<=575)
      {
        jQuery("#sidebar-wrapper").removeClass("show");
      }
      else
      {
        if(!jQuery("#sidebar-wrapper").hasClass("show"))
        {
          jQuery("#sidebar-wrapper").addClass("show");
        }
      }
    });
  }
}
