import { Injectable } from '@angular/core';
import { Missile } from './missile/missile';

const missili = [
  {
   name: 'Vega',
   country: 'Italy',
   active: false
  },
  {
    name: 'Tomahawk',
    country: 'United States',
    active: true
  },
  {
    name: 'BrahMos',
    country: 'India',
    active: false
  },
  {
    name: 'Falcon 9',
    country: 'United States',
    active: true
  },
  {
    name: 'Ariane 5',
    country: 'France',
    active: true
  },
 ]

@Injectable({
  providedIn: 'root'
})


export class MissiliService {

  getMissili(): Missile[] {
    return missili;
  }
}
