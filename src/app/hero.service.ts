import {Injectable} from '@angular/core';

import {Hero} from './hero';
import {HEROES} from './mock-heroes';

/*
Browser console errors: [Compiled successfully]
ERROR NullInjectorError: "StaticInjectorError(AppModule)[HeroesComponent -> HeroService]:
  StaticInjectorError(Platform: core)[HeroesComponent -> HeroService]:
    NullInjectorError: No provider for HeroService!"
 */

/*@Injectable({
  providedIn: 'root'
})*/

// @Injectable()

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() {
  }

  getHeroes(): Hero[] {
    return HEROES;
  }

}
