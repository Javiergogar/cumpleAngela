import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FresComponent } from './fres.component';

describe('FresComponent', () => {
  let component: FresComponent;
  let fixture: ComponentFixture<FresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
