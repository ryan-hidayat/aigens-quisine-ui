import { Component } from '@angular/core';
import { Button } from '../../components/button/button'; // Import component button
import { Header } from '../../components/header/header';

@Component({
  selector: 'aq-home',
  standalone: true,
  imports: [Header, Button], // Tambahkan Button ke imports
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
