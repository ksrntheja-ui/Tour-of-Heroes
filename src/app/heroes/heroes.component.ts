import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // Add a hero property
  // hero = 'Windstorm';

  // Refactor the component's hero property to be of type Hero.
  hero: Hero = { // ERROR in src/app/heroes/heroes.component.ts:14:9 - error TS2304: Cannot find name 'Hero'.
    id: 1,
    name: 'Windstorm'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
