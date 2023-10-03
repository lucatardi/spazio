import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MissiliService } from '../missili.service';
import { Missile } from '../missile/missile';

@Component({
  selector: 'missile-info',
  templateUrl: './missile-info.component.html',
  styleUrls: ['./missile-info.component.css']
})
export class MissileInfoComponent {
  constructor(private missiliService: MissiliService, private route: ActivatedRoute) {}
  
  missile?: Missile;

  getMissile() {
    const id = this.route.snapshot.paramMap.get('id');
    this.missiliService.getMissili().subscribe(missili =>  this.missile = missili.find(missile => missile.id === id))
  }

  ngOnInit(): void {
    this.getMissile();
  }
}
