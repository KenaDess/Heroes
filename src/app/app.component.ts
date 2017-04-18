import { Component } from '@angular/core';
import {Hero} from './hero';

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

  constructor() {
    this.title = 'Tour of Heroes';
    this.heroes = [
      new Hero(1, 'Windstorm'),
      new Hero(13, 'Bombasto'),
      new Hero(15, 'Magneta'),
      new Hero(20, 'Tornado')
    ];
    this.hero = this.heroes[0];
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
