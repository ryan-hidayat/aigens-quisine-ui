import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'solid' | 'outline' | 'ghost';
export type ButtonColor = 'primary' | 'secondary' | 'neutral';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'aq-button', // Selector kita: <aq-button>
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  // Menambahkan class dinamis ke host element <aq-button>
  host: {
    '[class]': 'hostClasses()',
    '[class.disabled]': 'disabled()',
  },
})
export class Button {
  // Input Signals (Angular Modern)
  variant = input<ButtonVariant>('solid');
  color = input<ButtonColor>('primary');
  size = input<ButtonSize>('md');
  disabled = input<boolean>(false);
  fullWidth = input<boolean>(false);

  // Computed class string untuk host element
  protected hostClasses = computed(() => {
    return [
      'aq-btn',
      `aq-btn--${this.variant()}`,
      `aq-btn--${this.color()}`,
      `aq-btn--${this.size()}`,
      this.fullWidth() ? 'aq-btn--full' : '',
    ].join(' ');
  });
}
