import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ServicesComponent } from './pages/services/services';
import { PricingComponent } from './pages/pricing/pricing';
import { ContactComponent } from './pages/contact/contact';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Hey Laundry - Premium Laundry & Dry Cleaning Service | Fresh Clothes Delivered' },
    { path: 'services', component: ServicesComponent, title: 'Our Services - Hey Laundry | Wash, Fold, Iron, Dry Cleaning' },
    { path: 'pricing', component: PricingComponent, title: 'Pricing - Hey Laundry | Affordable Laundry & Dry Cleaning Rates' },
    { path: 'contact', component: ContactComponent, title: 'Contact Us - Hey Laundry | Schedule a Pickup Today' },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
