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

  getMissile(): Missile | undefined {
    const id = this.route.snapshot.paramMap.get('id');
    return this.missiliService.getMissili().find(missile => missile.id === id)
  }

  ngOnInit(): void {
    this.missile = this.getMissile();
  }
}
