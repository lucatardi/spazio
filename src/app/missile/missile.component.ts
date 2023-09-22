import { Component } from '@angular/core';
import { Missile } from './missile';

@Component({
  selector: 'missile',
  templateUrl: './missile.component.html',
  styleUrls: ['./missile.component.css']
})
export class MissileComponent {
  missile: Missile = {
    name: 'Vega',
    country: 'Italy',
    active: true
  };
}
