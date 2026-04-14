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
    path: 'categories',
    title: 'Garment Categories & Service Types | Hey Laundry Hyderabad',
    loadComponent: () => import('./pages/categories/categories').then(m => m.CategoriesComponent)
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
    path: 'privacy-policy',
    title: 'Privacy Policy | Hey Laundry',
    loadComponent: () => import('./pages/privacy/privacy').then(m => m.PrivacyComponent)
  },
  {
    path: 'return-cancellation-policy',
    title: 'Return & Cancellation Policy | Hey Laundry',
    loadComponent: () => import('./pages/return/return').then(m => m.ReturnComponent)
  },
  {
    path: 'terms-conditions',
    title: 'Terms & Conditions | Hey Laundry',
    loadComponent: () => import('./pages/terms/terms').then(m => m.TermsComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
