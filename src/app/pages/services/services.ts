import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [RouterLink, CommonModule],
    templateUrl: './services.html',
    styleUrl: './services.css',
})
export class ServicesComponent implements OnInit, OnDestroy {
    private animationObserver: IntersectionObserver | null = null;

    services = [
        {
            icon: '👕',
            title: 'Wash & Fold',
            description: 'Your daily wear, washed with care and neatly folded. Perfect for those "I\'ll do laundry tomorrow" piles that keep growing!',
            features: ['Sorted by colors', 'Cold water wash', 'Neatly folded', 'Ready to wear'],
            funFact: 'Fun fact: The average person spends 6 months of their life doing laundry. We say: spend it doing literally anything else! 🎉',
        },
        {
            icon: '👔',
            title: 'Wash & Iron',
            description: 'Cleaned and pressed to perfection. Look sharp enough to impress your boss, your date, or your reflection.',
            features: ['Premium detergent', 'Expert ironing', 'Crease-free finish', 'Hanger delivery'],
            funFact: 'Pro tip: First impressions matter. Let us make sure your collar is sharper than your wit! 😄',
        },
        {
            icon: '🧥',
            title: 'Dry Cleaning',
            description: 'For those special garments that deserve the VIP treatment. Suits, sarees, silk — we handle them all like royalty.',
            features: ['Gentle solvents', 'Stain removal', 'Color protection', 'Delicate care'],
            funFact: 'Your designer outfit called. It says it wants the Hey Laundry spa treatment! 💅',
        },
        {
            icon: '♨️',
            title: 'Steam Ironing',
            description: 'Wrinkle-free perfection that\'ll make you look like you stepped out of a magazine. No filter needed!',
            features: ['Deep wrinkle removal', 'Fabric safe', 'Crisp finish', 'Same-day available'],
            funFact: 'Wrinkles are for bulldogs, not for your favourite shirt! 🐶',
        },
        {
            icon: '🚀',
            title: 'Express Laundry',
            description: 'Need it fast? We\'ve got you covered! Same-day service for those "I have nothing to wear" emergencies.',
            features: ['6-hour turnaround', 'Priority processing', 'Same-day delivery', 'Emergency service'],
            funFact: 'Because "I swear I set the alarm" doesn\'t solve the clean-shirt crisis! ⏰',
        },
        {
            icon: '🏠',
            title: 'Household Laundry',
            description: 'Curtains, bedsheets, towels, cushion covers — your home essentials cleaned and freshened up!',
            features: ['Deep cleaning', 'Fabric softening', 'Odor removal', 'Large items welcome'],
            funFact: 'Your curtains haven\'t been washed since... actually, let\'s not finish that sentence. Just call us.  😅',
        },
    ];

    process = [
        { step: 1, title: 'Book Online', desc: 'Schedule a pickup in just 30 seconds', icon: '📱' },
        { step: 2, title: 'We Pick Up', desc: 'Our team collects from your doorstep', icon: '🚗' },
        { step: 3, title: 'Expert Care', desc: 'Clothes cleaned with premium products', icon: '✨' },
        { step: 4, title: 'Delivered Fresh', desc: 'Clean clothes returned to your door', icon: '📦' },
    ];

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
