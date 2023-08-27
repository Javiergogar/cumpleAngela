import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitaComponent } from './bita.component';

describe('BitaComponent', () => {
  let component: BitaComponent;
  let fixture: ComponentFixture<BitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
