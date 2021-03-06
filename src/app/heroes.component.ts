import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit {
  title : string;
  hero : Hero;
  heroes : Hero[];
  selectedHero : Hero;

  constructor(private heroService : HeroService) {
    this.title = 'Tour of Heroes';
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
