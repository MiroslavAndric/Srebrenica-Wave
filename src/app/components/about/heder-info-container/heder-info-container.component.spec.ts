import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HederInfoContainerComponent } from './heder-info-container.component';

describe('HederInfoContainerComponent', () => {
  let component: HederInfoContainerComponent;
  let fixture: ComponentFixture<HederInfoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HederInfoContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HederInfoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
