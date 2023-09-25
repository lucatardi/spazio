import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMissiliComponent } from './lista-missili.component';

describe('ListaMissiliComponent', () => {
  let component: ListaMissiliComponent;
  let fixture: ComponentFixture<ListaMissiliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaMissiliComponent]
    });
    fixture = TestBed.createComponent(ListaMissiliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
