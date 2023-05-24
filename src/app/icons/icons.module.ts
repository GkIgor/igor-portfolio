import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas, faSpinner, faBars } from '@fortawesome/free-solid-svg-icons';
import { far, } from '@fortawesome/free-regular-svg-icons';
import { faAngular, faCss3Alt, faHtml5, faJs, faNode } from '@fortawesome/free-brands-svg-icons';


@NgModule({
  exports: [FontAwesomeModule],
  imports: [
    CommonModule
  ]
})
export class IconsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faBars, faSpinner, faAngular, faCss3Alt, faJs, faNode, faHtml5, );
  }
}
