import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SindyComponent } from './sindy.component';

describe('SindyComponent', () => {
  let component: SindyComponent;
  let fixture: ComponentFixture<SindyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SindyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SindyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
