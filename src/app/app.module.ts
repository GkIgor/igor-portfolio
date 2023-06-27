import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { HomeComponent } from './home/home.component';
import { IconsModule } from './icons/icons.module';
import { NavIconsComponent } from './navbar/nav-icons/nav-icons.component';
import { BannerComponentComponent } from './home/banner-component/banner-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SobreComponent,
    HomeComponent,
    NavIconsComponent,
    BannerComponentComponent,
  ],
  imports: [
    BrowserModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
