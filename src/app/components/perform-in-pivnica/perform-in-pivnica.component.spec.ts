import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformInPivnicaComponent } from './perform-in-pivnica.component';

describe('PerformInPivnicaComponent', () => {
  let component: PerformInPivnicaComponent;
  let fixture: ComponentFixture<PerformInPivnicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformInPivnicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformInPivnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
