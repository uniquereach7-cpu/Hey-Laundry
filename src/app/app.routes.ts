import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Hyderabad\'s #1 Luxury Laundry & Dry Cleaning Service | Hey Laundry',
    loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent)
  },
  {
    path: 'services',
    title: 'Premium Garment Care & Dry Cleaning Services | Hey Laundry',
    loadComponent: () => import('./pages/services/services').then(m => m.ServicesComponent)
  },
  {
    path: 'pricing',
    title: 'Transparent Pricing for Luxury Laundry | Hey Laundry',
    loadComponent: () => import('./pages/pricing/pricing').then(m => m.PricingComponent)
  },
  {
    path: 'contact',
    title: 'Contact Our Concierge | Hey Laundry Hyderabad',
    loadComponent: () => import('./pages/contact/contact').then(m => m.ContactComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
