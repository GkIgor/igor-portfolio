import { Component } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  user: string = 'Igor F.';

  sobre: boolean = false;
  showMenu: boolean = false;

  exibirSobre(): void {
    this.sobre = !this.sobre;

  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }



}
