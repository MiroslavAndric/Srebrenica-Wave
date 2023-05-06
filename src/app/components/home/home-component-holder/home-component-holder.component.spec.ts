import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponentHolderComponent } from './home-component-holder.component';

describe('HomeComponentHolderComponent', () => {
  let component: HomeComponentHolderComponent;
  let fixture: ComponentFixture<HomeComponentHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponentHolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponentHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
