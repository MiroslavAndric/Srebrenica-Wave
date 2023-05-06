import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentAboutComponent } from './main-content-about.component';

describe('MainContentAboutComponent', () => {
  let component: MainContentAboutComponent;
  let fixture: ComponentFixture<MainContentAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainContentAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContentAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
