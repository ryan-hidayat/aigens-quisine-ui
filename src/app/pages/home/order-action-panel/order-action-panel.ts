import { Component, EventEmitter, Output } from '@angular/core';
import { Button } from '../../../components/button/button';

export type OrderAction = 'startOrder' | 'orderHistory' | 'reservation';

@Component({
  selector: 'aq-order-action-panel',
  standalone: true,
  imports: [Button],
  templateUrl: './order-action-panel.html',
  styleUrl: './order-action-panel.scss',
})
export class OrderActionPanel {
  @Output() action = new EventEmitter<OrderAction>();

  onStartOrder() {
    this.action.emit('startOrder');
  }

  onOrderHistory() {
    this.action.emit('orderHistory');
  }

  onReservation() {
    this.action.emit('reservation');
  }
}
