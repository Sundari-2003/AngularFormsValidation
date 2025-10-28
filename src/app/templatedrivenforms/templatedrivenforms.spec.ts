import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Templatedrivenforms } from './templatedrivenforms';

describe('Templatedrivenforms', () => {
  let component: Templatedrivenforms;
  let fixture: ComponentFixture<Templatedrivenforms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Templatedrivenforms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Templatedrivenforms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
