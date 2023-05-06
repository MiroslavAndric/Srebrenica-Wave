import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SWFestComponent } from './sw-fest.component';

describe('SWFestComponent', () => {
  let component: SWFestComponent;
  let fixture: ComponentFixture<SWFestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SWFestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SWFestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
