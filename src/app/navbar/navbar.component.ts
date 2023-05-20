import { Component } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public user: string = 'Igor F.';
  public sobre: boolean = false;

  public exibirSobre(): void {
    this.sobre = !this.sobre;
  }
}
