import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-component',
  templateUrl: './banner-component.component.html',
  styleUrls: ['./banner-component.component.css']
})

export class BannerComponentComponent {
  classCSSDesktop: string = 'presentation md:text-xl md:m-2 md:pt-3 brightness-100';
  imgPath: string = '/assets/images/js-code.jpg';
  srcLink: string = '/assets/images/angularjs-wallpapers-wallpaper-cave.png'

  textoDigitado: string = '';

  digitarTexto() {
    const textoCompleto = 'Sou um desenvolvedor apaixonado por criar experiências incríveis na web. Combinando minha expertise em Angular e minha paixão por design, estou empenhado em desenvolver soluções interativas e intuitivas.';
    let i = 0;

    const intervalo = setInterval(() => {
      this.textoDigitado += textoCompleto[i];
      i++;

      if (i === textoCompleto.length) {
        clearInterval(intervalo);
      }
    }, 100); // Ajuste o valor do intervalo conforme desejado (em milissegundos)
  }
  ngOnInit(): void {
    this.digitarTexto();
  }

}
