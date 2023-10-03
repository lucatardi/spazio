import { Component } from '@angular/core';
import { Missile } from '../missile/missile';
import { MissiliService } from '../missili.service';

@Component({
  selector: 'lista-missili',
  templateUrl: './lista-missili.component.html',
  styleUrls: ['./lista-missili.component.css']
})
export class ListaMissiliComponent {
  constructor(private missiliService: MissiliService) {}
  
  missili: Missile[] = [];

  ngOnInit(): void {
    this.missiliService.getMissili().subscribe(missili => this.missili = missili);
  }
}
