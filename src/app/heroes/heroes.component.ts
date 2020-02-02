import {Component, OnInit} from '@angular/core';

import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
// TS2305: Module '"../hero.service"' has no exported member 'HeroService'.
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // Add a hero property
  // hero = 'Windstorm';

  // Refactor the component's hero property to be of type Hero.
  /*
  hero: Hero = { // ERROR in src/app/heroes/heroes.component.ts:14:9 - error TS2304: Cannot find name 'Hero'.
    id: 1,
    name: 'Windstorm'
  };
   */

  // define a component property called heroes to expose the HEROES array for binding.
  heroes = HEROES;

  // define a property : selectedHero
  selectedHero: Hero;

  constructor(
    private heroService: HeroService
  ) {
  }

  ngOnInit() {
  }

  onSelect(hero: Hero) {
    console.log(hero);
    this.selectedHero = hero;
  }

}
