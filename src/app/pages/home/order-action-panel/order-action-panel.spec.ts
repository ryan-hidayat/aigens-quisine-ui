import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderActionPanel } from './order-action-panel';

describe('OrderActionPanel', () => {
  let component: OrderActionPanel;
  let fixture: ComponentFixture<OrderActionPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderActionPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderActionPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
