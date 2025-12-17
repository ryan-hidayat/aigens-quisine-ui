import { Component } from '@angular/core';
import { OrderActionPanel, OrderAction } from './order-action-panel/order-action-panel';
import { Header } from '../../components/header/header';
import { BRAND } from '../../config/brand.config';
import { HomeBanner } from './home-banner/home-banner';

@Component({
  selector: 'aq-home',
  standalone: true,
  imports: [Header, OrderActionPanel, HomeBanner],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  banners = [
    {
      id: 'home-1',
      imageUrl: `${BRAND.assetsPath}/banners/home-banner-1.jpg`,
      alt: 'Home promo',
    },
    {
      id: 'home-2',
      imageUrl: `${BRAND.assetsPath}/banners/home-banner-2.jpg`,
      alt: 'Promo 2',
    },
  ];
  onHomeAction(action: OrderAction) {
    // sementara: console dulu, nanti bisa pakai router.navigate
    console.log('Home action:', action);
  }
}
