import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRegComponent } from './book-reg.component';

describe('BookRegComponent', () => {
  let component: BookRegComponent;
  let fixture: ComponentFixture<BookRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
