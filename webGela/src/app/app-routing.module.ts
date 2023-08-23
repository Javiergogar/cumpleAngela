import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FelicitacionComponent } from './felicitacion/felicitacion.component';
import { JavilinComponent } from './javilin/javilin.component';
import { SindyComponent } from './sindy/sindy.component';
import { ZairaComponent } from './zaira/zaira.component';
import { EduComponent } from './edu/edu.component';
import { ManuComponent } from './manu/manu.component';
import { FresComponent } from './fres/fres.component';
import { KatriComponent } from './katri/katri.component';
import { HugoComponent } from './hugo/hugo.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'felicitacion', component: FelicitacionComponent },
  { path: 'javilin', component: JavilinComponent },
  { path: 'sindy', component: SindyComponent },
  { path: 'zaira', component: ZairaComponent },
  { path: 'edu', component: EduComponent },
  { path: 'manu', component: ManuComponent },
  { path: 'fres', component: FresComponent },
  { path: 'katri', component: KatriComponent },
  { path: 'hugo', component: HugoComponent },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
