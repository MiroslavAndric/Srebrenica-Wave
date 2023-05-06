import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentBreweryComponent } from './main-content-brewery.component';

describe('MainContentBreweryComponent', () => {
  let component: MainContentBreweryComponent;
  let fixture: ComponentFixture<MainContentBreweryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainContentBreweryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContentBreweryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
