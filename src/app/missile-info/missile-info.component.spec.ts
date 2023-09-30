import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissileInfoComponent } from './missile-info.component';

describe('MissileInfoComponent', () => {
  let component: MissileInfoComponent;
  let fixture: ComponentFixture<MissileInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MissileInfoComponent]
    });
    fixture = TestBed.createComponent(MissileInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
