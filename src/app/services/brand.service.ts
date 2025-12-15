import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BrandService {
  // Signal untuk menyimpan ID brand yang aktif
  activeBrandId = signal<string>('default');

  assetsPath = computed(() => `assets/brands/${this.activeBrandId()}`);

  setBrand(brandId: string) {
    this.activeBrandId.set(brandId);
  }
}
