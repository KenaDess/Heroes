import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}


