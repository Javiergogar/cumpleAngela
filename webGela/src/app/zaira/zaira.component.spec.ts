import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZairaComponent } from './zaira.component';

describe('ZairaComponent', () => {
  let component: ZairaComponent;
  let fixture: ComponentFixture<ZairaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZairaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZairaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
