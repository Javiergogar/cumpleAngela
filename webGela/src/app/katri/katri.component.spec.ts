import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatriComponent } from './katri.component';

describe('KatriComponent', () => {
  let component: KatriComponent;
  let fixture: ComponentFixture<KatriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KatriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KatriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
