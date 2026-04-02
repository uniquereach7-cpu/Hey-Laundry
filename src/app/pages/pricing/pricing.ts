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

    faqs = [
        { question: 'How does pickup & delivery work?', answer: 'Just schedule a pickup through our website or give us a call! Our team arrives at your doorstep, collects your garments, and delivers them back fresh and clean. Zero effort on your end! 🚗', open: false },
        { question: 'What if my clothes are damaged?', answer: 'We treat every garment with the utmost care. In the extremely rare event of any damage, our garment insurance covers the full cost. Your clothes are safe with us! 🛡️', open: false },
        { question: 'How long does the service take?', answer: 'Essential plan: 48-hour turnaround. Premium: 24 hours. Signature: Same-day rush option available! Need it faster? Just let us know. ⚡', open: false },
        { question: 'Can I pick my detergent?', answer: 'Absolutely! We offer standard, premium eco-friendly, and hypoallergenic options. Just tell us your preference when you book! 🌿', open: false },
        { question: 'Is there a minimum order?', answer: 'Nope! Whether it is a single shirt or a mountain of laundry — we handle it all with the same level of care. 😊', open: false },
    ];

    toggleFaq(index: number) { this.faqs[index].open = !this.faqs[index].open; }

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
