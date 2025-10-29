import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tasktemplatedrivenforms } from './tasktemplatedrivenforms';

describe('Tasktemplatedrivenforms', () => {
  let component: Tasktemplatedrivenforms;
  let fixture: ComponentFixture<Tasktemplatedrivenforms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tasktemplatedrivenforms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tasktemplatedrivenforms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
