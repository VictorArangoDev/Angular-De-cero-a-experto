import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Drangoball } from './drangoball';

describe('Drangoball', () => {
  let component: Drangoball;
  let fixture: ComponentFixture<Drangoball>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Drangoball]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Drangoball);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
