import { Component, signal, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { BRAND } from './config/brand.config';

@Component({
  selector: 'aq-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal(BRAND.name);

  constructor(private titleService: Title, @Inject(DOCUMENT) private document: Document) {
    // Set browser tab title from brand
    this.titleService.setTitle(BRAND.name);

    // Set favicon from brand config
    const link: HTMLLinkElement =
      this.document.querySelector("link[rel*='icon']") || this.document.createElement('link');

    link.rel = 'icon';
    link.href = BRAND.assets.favicon;

    this.document.head.appendChild(link);
  }
}
