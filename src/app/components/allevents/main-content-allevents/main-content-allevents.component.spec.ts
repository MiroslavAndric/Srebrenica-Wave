import { ComponentFixture, TestBed } from '@angular/core/testing';

import {MainContentAlleventsComponent} from './main-content-allevents.component';

describe('MainContentAlleventsComponent', () => {
  let component: MainContentAlleventsComponent;
  let fixture: ComponentFixture<MainContentAlleventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainContentAlleventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContentAlleventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
