import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEventHomeComponent } from './single-event-home.component';

describe('SingleEventHomeComponent', () => {
  let component: SingleEventHomeComponent;
  let fixture: ComponentFixture<SingleEventHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleEventHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleEventHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
