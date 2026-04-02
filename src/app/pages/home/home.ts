import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [RouterLink, CommonModule],
    templateUrl: './home.html',
    styleUrl: './home.css',
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
    @ViewChild('promoVideo') videoElement!: ElementRef<HTMLVideoElement>;
    private animationObserver: IntersectionObserver | null = null;

    stats = [
        { number: '10,000+', label: 'Happy Customers' },
        { number: '50,000+', label: 'Garments Cleaned' },
        { number: '99%', label: 'Satisfaction Rate' },
        { number: '24hr', label: 'Turnaround Time' },
    ];

    whyUs = [
        { title: 'Premium Eco Products', desc: 'Gentle on fabrics, tough on stains — and kind to the planet' },
        { title: 'Lightning Fast Service', desc: '24-hour turnaround so you never run out of clean clothes' },
        { title: 'Free Pickup & Delivery', desc: 'We come to your door — no trips, no hassle, just fresh clothes' },
        { title: 'Satisfaction Guaranteed', desc: 'Not happy? We\'ll re-clean for free. No questions asked!' },
    ];

    howItWorks = [
        { step: '01', title: 'Schedule', description: 'Book a pickup online or call us — takes just 30 seconds!', emoji: '📱' },
        { step: '02', title: 'We Collect', description: 'Our friendly team picks up your laundry from your doorstep.', emoji: '🚪' },
        { step: '03', title: 'Expert Care', description: 'Premium cleaning with eco-friendly products & expert handling.', emoji: '✨' },
        { step: '04', title: 'Fresh Delivery', description: 'Perfectly clean clothes delivered back, neatly folded.', emoji: '🧺' },
    ];

    testimonials = [
        { name: 'Priya S.', text: 'Hey Laundry saved my weekends! My clothes come back smelling amazing and perfectly pressed. Best service ever! 🌸', rating: 5 },
        { name: 'Rahul M.', text: 'They handle my office shirts perfectly every single time. The express service is a lifesaver for busy mornings!', rating: 5 },
        { name: 'Ananya K.', text: 'Super affordable and the quality is outstanding. My whites are actually WHITE now! Highly recommend to everyone. 😍', rating: 5 },
    ];

    ngOnInit() {
        this.setupScrollAnimations();
    }

    ngAfterViewInit(): void {
        if (this.videoElement && this.videoElement.nativeElement) {
            const video = this.videoElement.nativeElement;
            video.muted = true;
            video.play().catch(error => {
                console.error('Video autoplay was prevented:', error);
            });
        }
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