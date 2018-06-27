import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pt-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  
    constructor(private router: Router) {
    }
    redirectUrl(url:string){
        this.router.navigate([url]);
    }
}
