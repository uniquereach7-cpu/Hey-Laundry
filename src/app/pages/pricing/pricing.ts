import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-pricing',
    standalone: true,
    imports: [RouterLink, CommonModule],
    templateUrl: './pricing.html',
    styleUrl: './pricing.css',
})
export class PricingComponent implements OnInit, OnDestroy {
    private animationObserver: IntersectionObserver | null = null;

    plans = [
        {
            name: 'Essential',
            icon: '🧺',
            tagline: 'Great for individuals',
            price: '49',
            unit: '/kg',
            features: ['Wash & Fold', 'Standard Detergent', '48-hour Turnaround', 'Free Pickup & Delivery', 'Sorted by Colour'],
            popular: false,
        },
        {
            name: 'Premium',
            icon: '⭐',
            tagline: 'Perfect for families',
            price: '79',
            unit: '/kg',
            features: ['Wash & Iron', 'Eco-Friendly Detergent', '24-hour Turnaround', 'Free Pickup & Delivery', 'Fabric Softener', 'Stain Treatment', 'Hanger Delivery'],
            popular: true,
        },
        {
            name: 'Signature',
            icon: '💎',
            tagline: 'The ultimate care package',
            price: '149',
            unit: '/kg',
            features: ['Dry Cleaning', 'Premium Products', 'Same-Day Rush', 'Free Pickup & Delivery', 'Colour Protection', 'Expert Stain Removal', 'Pressed & Packaged', 'Garment Insurance'],
            popular: false,
        },
    ];

    itemPricing = [
        { item: 'Shirt / T-Shirt', washFold: '₹30', washIron: '₹50', dryCleaning: '₹120' },
        { item: 'Trousers / Jeans', washFold: '₹40', washIron: '₹60', dryCleaning: '₹150' },
        { item: 'Suit (2 piece)', washFold: '—', washIron: '—', dryCleaning: '₹450' },
        { item: 'Saree', washFold: '₹60', washIron: '₹100', dryCleaning: '₹300' },
        { item: 'Bedsheet (Single)', washFold: '₹50', washIron: '₹80', dryCleaning: '₹150' },
        { item: 'Bedsheet (Double)', washFold: '₹70', washIron: '₹100', dryCleaning: '₹200' },
        { item: 'Curtain (per panel)', washFold: '₹80', washIron: '₹120', dryCleaning: '₹250' },
        { item: 'Blanket / Comforter', washFold: '₹150', washIron: '—', dryCleaning: '₹400' },
    ];



    ngOnInit() { this.setupScrollAnimations(); }
    ngOnDestroy() { this.animationObserver?.disconnect(); }

    setupScrollAnimations() {
        if (typeof IntersectionObserver !== 'undefined') {
            this.animationObserver = new IntersectionObserver(
                (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('animate-in'); }),
                { threshold: 0.1 }
            );
            setTimeout(() => document.querySelectorAll('.animate-on-scroll').forEach((el) => this.animationObserver?.observe(el)), 100);
        }
    }
}
