import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-component',
  templateUrl: './banner-component.component.html',
  styleUrls: ['./banner-component.component.css']
})

export class BannerComponentComponent {
  classCSSDesktop: string = 'presentation md:text-xl md:m-2 md:pt-3';

}
