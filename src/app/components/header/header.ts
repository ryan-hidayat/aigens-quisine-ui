import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'aq-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private brandService = inject(BrandService);

  // FIX: Gunakan 'assetsPath' sesuai yang ada di BrandService kamu
  logoPath = this.brandService.assetsPath;
}
