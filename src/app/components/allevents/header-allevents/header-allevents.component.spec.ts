import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAlleventsComponent } from './header-allevents.component';

describe('HeaderAlleventsComponent', () => {
  let component: HeaderAlleventsComponent;
  let fixture: ComponentFixture<HeaderAlleventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderAlleventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderAlleventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
