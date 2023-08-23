import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavilinComponent } from './javilin.component';

describe('JavilinComponent', () => {
  let component: JavilinComponent;
  let fixture: ComponentFixture<JavilinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavilinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavilinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
