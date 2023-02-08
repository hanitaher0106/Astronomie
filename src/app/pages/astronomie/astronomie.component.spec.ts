import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronomieComponent } from './astronomie.component';

describe('AstronomieComponent', () => {
  let component: AstronomieComponent;
  let fixture: ComponentFixture<AstronomieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstronomieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstronomieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
