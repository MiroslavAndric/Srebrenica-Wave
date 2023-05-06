import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfCenterComponent } from './mf-center.component';

describe('MfCenterComponent', () => {
  let component: MfCenterComponent;
  let fixture: ComponentFixture<MfCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfCenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
