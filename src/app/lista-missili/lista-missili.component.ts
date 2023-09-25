import { Component } from '@angular/core';
import { Missile } from '../missile/missile';

@Component({
  selector: 'lista-missili',
  templateUrl: './lista-missili.component.html',
  styleUrls: ['./lista-missili.component.css']
})
export class ListaMissiliComponent {
   missili: Missile[] = [
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
   ]
}
