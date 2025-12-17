import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BannerItem = {
  id: string;
  imageUrl: string;
  alt?: string;
  href?: string;
};

@Component({
  selector: 'aq-home-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-banner.html',
  styleUrl: './home-banner.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeBanner {
  @Input() banners: BannerItem[] = [];
  trackById = (_: number, b: BannerItem) => b.id;
}
