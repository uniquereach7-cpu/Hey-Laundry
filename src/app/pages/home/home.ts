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
        { title: 'Organic Eco Products', description: 'Gentle on fabrics, tough on stains — and completely safe for your skin and the environment.', icon: '🍃' },
        { title: 'Master Craftsmanship', description: 'Decades of experience in fabric care, ensuring your designer pieces and delicates are expertly handled.', icon: '✂️' },
        { title: 'Free Doorstep Service', description: 'We collect and deliver your pristine garments right to your door with zero hassle.', icon: '🚪' },
        { title: 'Pristine Guarantee', description: 'Absolute satisfaction. If it\'s not perfect, we re-process it complimentary.', icon: '⭐' },
    ];

    howItWorks = [
        { step: '01', title: 'Schedule Online', description: 'Book a collection time from your device in under 30 seconds.' },
        { step: '02', title: 'Concierge Pickup', description: 'Our team collects your garments precisely at your requested time.' },
        { step: '03', title: 'Master Cleaning', description: 'Your clothes receive meticulous, personalized care and stain treatment.' },
        { step: '04', title: 'Pristine Delivery', description: 'Garments are delivered back flawlessly folded and ready to wear.' },
    ];

    testimonials = [
        { name: 'Arjun S.', review: 'The only service I trust with my bespoke suits. Their attention to detail and packaging is genuinely unmatched in Hyderabad.', location: 'Jubilee Hills' },
        { name: 'Dr. Meera P.', review: 'They handle my silk sarees perfectly. The convenience of free pickup and the quality of dry cleaning is exceptional.', location: 'Banjara Hills' },
        { name: 'Vikram R.', review: 'Consistent, premium, and flawless. The wash and iron service keeps my work wardrobe crisp all week. Highly recommended.', location: 'HITEC City' },
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