import { Injectable } from '@angular/core';
import { Missile } from './missile/missile';

const missili = [
  {
   name: 'Vega',
   country: 'Italy',
   active: false,
   id: 'ita1',
   first_flight: '10-09-2010',
  },
  {
    name: 'Tomahawk',
    country: 'United States',
    active: true,
    id: 'fogir038',
    first_flight: '10-09-2011',
    height: 70,
  },
  {
    name: 'BrahMos',
    country: 'India',
    active: false,
    id: '5o59kd038',
    first_flight: '10-09-2020',
    height: 80,
  },
  {
    name: 'Falcon 9',
    country: 'United States',
    active: true,
    id: 'fjgoei29',
    first_flight: '10-09-2016',
    height: 40,
  },
  {
    name: 'Ariane 5',
    country: 'France',
    active: true,
    id: 'mgksowi59',
    first_flight: '10-09-2008',
    height: 62,
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
