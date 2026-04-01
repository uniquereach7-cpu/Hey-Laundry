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
            name: 'Fresh Start',
            emoji: '🫧',
            tagline: 'Perfect for singles & students',
            price: '49',
            unit: '/kg',
            features: [
                'Wash & Fold',
                'Standard Detergent',
                '48-hour Turnaround',
                'Free Pickup & Delivery',
                'Sorted by Color',
            ],
            popular: false,
            color: 'blue',
        },
        {
            name: 'Clean Machine',
            emoji: '⚡',
            tagline: 'Most popular for families',
            price: '79',
            unit: '/kg',
            features: [
                'Wash & Iron',
                'Premium Detergent',
                '24-hour Turnaround',
                'Free Pickup & Delivery',
                'Fabric Softener Included',
                'Stain Pre-treatment',
                'On Hangers',
            ],
            popular: true,
            color: 'gold',
        },
        {
            name: 'Royal Treatment',
            emoji: '👑',
            tagline: 'For those who want the best',
            price: '149',
            unit: '/kg',
            features: [
                'Dry Cleaning',
                'Premium Eco Products',
                'Same-Day Rush Available',
                'Free Pickup & Delivery',
                'Color Protection',
                'Expert Stain Removal',
                'Pressed & Packaged',
                'Garment Insurance',
            ],
            popular: false,
            color: 'purple',
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
        { question: 'How does pickup & delivery work?', answer: 'Just schedule a pickup online. Our friendly team arrives at your doorstep, collects your laundry, and delivers it back fresh & clean. It\'s easier than ordering food! 🍕', open: false },
        { question: 'What if my clothes are damaged?', answer: 'We treat every garment like it\'s our own! But in the rare case of damage, our garment insurance covers the cost. We\'ve got your back (and your shirts)! 🛡️', open: false },
        { question: 'How long does it take?', answer: 'Standard service is 48 hours, our popular plan is 24 hours, and for those "OMG I have a meeting" moments, we offer same-day rush service! ⚡', open: false },
        { question: 'Can I choose my detergent?', answer: 'Absolutely! We offer standard, premium eco-friendly, and hypoallergenic options. Because your clothes (and nose) deserve choices! 🌿', open: false },
        { question: 'Is there a minimum order?', answer: 'Nope! Whether it\'s one shirt or a mountain of laundry, we\'re happy to help. No judgment on pile size, we promise! 😄', open: false },
    ];

    toggleFaq(index: number) {
        this.faqs[index].open = !this.faqs[index].open;
    }

    ngOnInit() {
        this.setupScrollAnimations();
    }

    ngOnDestroy() {
        if (this.animationObserver) {
            this.animationObserver.disconnect();
        }
    }

    setupScrollAnimations() {
        if (typeof IntersectionObserver !== 'undefined') {
            this.animationObserver = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('animate-in');
                        }
                    });
                },
                { threshold: 0.1 }
            );

            setTimeout(() => {
                document.querySelectorAll('.animate-on-scroll').forEach((el) => {
                    this.animationObserver?.observe(el);
                });
            }, 100);
        }
    }
}
