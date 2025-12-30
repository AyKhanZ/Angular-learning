import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  navItems = [
    { label: 'Home', route: '/' },
    { label: 'Features', route: '/features' },
    { label: 'Pricing', route: '/pricing' },
    { label: 'Contact As', route: '/contact' },
    { label: 'About', route: '/about' }
  ];
}