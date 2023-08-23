import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FelicitacionComponent } from './felicitacion/felicitacion.component';
import { JavilinComponent } from './javilin/javilin.component';
import { SindyComponent } from './sindy/sindy.component';
import { ZairaComponent } from './zaira/zaira.component';
import { EduComponent } from './edu/edu.component';
import { BtnAtrasComponent } from './btn-atras/btn-atras.component';
import { ManuComponent } from './manu/manu.component';
import { FresComponent } from './fres/fres.component';
import { KatriComponent } from './katri/katri.component';
import { HugoComponent } from './hugo/hugo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    FelicitacionComponent,
    JavilinComponent,
    SindyComponent,
    ZairaComponent,
    EduComponent,
    BtnAtrasComponent,
    ManuComponent,
    FresComponent,
    KatriComponent,
    HugoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports:[
    HeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
