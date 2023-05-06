import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentFestivalComponent } from './main-content-festival.component';

describe('MainContentFestivalComponent', () => {
  let component: MainContentFestivalComponent;
  let fixture: ComponentFixture<MainContentFestivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainContentFestivalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContentFestivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
