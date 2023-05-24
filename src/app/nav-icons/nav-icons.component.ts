import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-icons',
  templateUrl: './nav-icons.component.html',
  styleUrls: ['./nav-icons.component.css']
})
export class NavIconsComponent {
  protected Size: boolean = window.innerWidth <= 400;


}