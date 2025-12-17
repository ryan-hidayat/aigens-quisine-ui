import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { BrandService } from '../../services/brand.service';
import { BRAND } from '../../config/brand.config';

@Component({
  selector: 'aq-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  animations: [
    // Animasi untuk konten Sidebar
    trigger('slideInOut', [
      state(
        'closed',
        style({
          transform: 'translateX(-100%)',
        })
      ),
      state(
        'open',
        style({
          transform: 'translateX(0)',
        })
      ),
      // Efek Spring menggunakan cubic-bezier
      transition('closed <=> open', [animate('400ms cubic-bezier(0.8, 0.1, 0, 1)')]),
    ]),
    // Animasi Fade untuk Overlay hitam
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('200ms ease-out', style({ opacity: 0 }))]),
    ]),
  ],
})
export class Header {
  private brandService = inject(BrandService);
  logoPath = this.brandService.assetsPath;
  isMenuOpen = signal(false);
  brand = BRAND;

  toggleMenu() {
    this.isMenuOpen.update((v) => !v);
  }
}
