import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFestivalComponent } from './header-festival.component';

describe('HeaderFestivalComponent', () => {
  let component: HeaderFestivalComponent;
  let fixture: ComponentFixture<HeaderFestivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderFestivalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderFestivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
