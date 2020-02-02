import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';

import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {MessageService} from './message.service';

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

  constructor(
    private messageService: MessageService
  ) {
  }

  getHeroes(): Observable<Hero[]> {
    // of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
    return of(HEROES);
  }

}
