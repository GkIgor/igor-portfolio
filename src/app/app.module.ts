import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { HomeComponent } from './components/home/home.component';
import { IconsModule } from './icons/icons.module';
import { NavIconsComponent } from './components/navbar/nav-icons/nav-icons.component';
import { BannerComponentComponent } from './components/home/banner-component/banner-component.component';
import { GridSkillsComponent } from './components/home/banner-component/grid-skills/grid-skills.component';
import { CarrouselComponent } from './components/home/carrousel/carrousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SobreComponent,
    HomeComponent,
    NavIconsComponent,
    BannerComponentComponent,
    GridSkillsComponent,
    CarrouselComponent,
  ],
  imports: [
    BrowserModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
