import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './services.html',
    styleUrl: './services.css',
})
export class ServicesComponent implements OnInit, OnDestroy {
    private animationObserver: IntersectionObserver | null = null;

    services = [
        {
            icon: '👕',
            title: 'Wash & Fold',
            description: 'Your daily wear, washed with care and neatly folded. Perfect for those ever-growing laundry piles!',
            features: ['Sorted by colours', 'Cold water wash', 'Neatly folded', 'Ready to wear'],
        },
        {
            icon: '👔',
            title: 'Wash & Iron',
            description: 'Cleaned and pressed to perfection. Look sharp enough to impress everyone!',
            features: ['Premium detergent', 'Expert ironing', 'Crease-free finish', 'Hanger delivery'],
        },
        {
            icon: '🧥',
            title: 'Dry Cleaning',
            description: 'VIP treatment for your special garments — suits, sarees, silk & designer pieces.',
            features: ['Gentle solvents', 'Stain removal', 'Colour protection', 'Delicate care'],
        },
        {
            icon: '♨️',
            title: 'Steam Ironing',
            description: 'Wrinkle-free perfection that makes you look like you stepped out of a magazine!',
            features: ['Deep wrinkle removal', 'Fabric safe', 'Crisp finish', 'Same-day available'],
        },
        {
            icon: '🚀',
            title: 'Express Service',
            description: 'Need it fast? Same-day service for those "I have nothing to wear" emergencies!',
            features: ['6-hour turnaround', 'Priority processing', 'Same-day delivery', 'Emergency service'],
        },
        {
            icon: '🏠',
            title: 'Home Textiles',
            description: 'Curtains, bedsheets, towels — your home essentials cleaned and freshened!',
            features: ['Deep cleaning', 'Fabric softening', 'Odour removal', 'Large items welcome'],
        },
    ];

    process = [
        { step: 1, title: 'Book Online', desc: 'Schedule a pickup in 30 seconds', icon: '📱' },
        { step: 2, title: 'We Collect', desc: 'Our team picks up from your door', icon: '🚗' },
        { step: 3, title: 'Expert Care', desc: 'Premium cleaning with eco products', icon: '✨' },
        { step: 4, title: 'Fresh Delivery', desc: 'Clean clothes returned to you', icon: '📦' },
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
