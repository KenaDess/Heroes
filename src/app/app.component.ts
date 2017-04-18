import { Component } from '@angular/core';
import {Hero} from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string;
  hero : Hero;
  heroes : Hero[];
  selectedHero : Hero;
  heroService = new HeroService();

  constructor() {
    this.title = 'Tour of Heroes';
    this.heroes = this.heroService.getHeroes();
    this.hero = this.heroes[0];
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
