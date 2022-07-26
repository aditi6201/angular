import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public onAboutCllick(){
    this.router.navigate([]).then(result => { window.open("#about/" , "_blank"); });
  }
  public onHomeCllick(){
    this.router.navigate([]).then(result => { window.open("#main/" , "_blank"); });
  }
  public onContactCllick(){
    this.router.navigate([]).then(result => { window.open("#contact/" , "_blank"); });
  }

}
