import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPivnicaComponent } from './book-pivnica.component';

describe('BookPivnicaComponent', () => {
  let component: BookPivnicaComponent;
  let fixture: ComponentFixture<BookPivnicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookPivnicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookPivnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
