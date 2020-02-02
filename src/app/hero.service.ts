import {Injectable} from '@angular/core';

import {HEROES} from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
class HeroService {

  constructor() {
  }

  getHeroes() {
    return HEROES;
  }

}
