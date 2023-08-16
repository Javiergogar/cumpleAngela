import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoFelicitacionComponent } from './texto-felicitacion.component';

describe('TextoFelicitacionComponent', () => {
  let component: TextoFelicitacionComponent;
  let fixture: ComponentFixture<TextoFelicitacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextoFelicitacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextoFelicitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
