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
        { number: '1,000+', label: 'Happy Customers' },
        { number: '5⭐', label: 'Rated On Google' },
        { number: '99%', label: 'Satisfaction Rate' },
        { number: '24hr', label: 'Turnaround Time' },
    ];

    whyUs = [
        { title: 'Fabric-Specific Care', description: 'Every garment is treated based on its fabric, structure, and use, ensuring it receives the right process without damage or compromise.', icon: '⭐' },
        { title: 'Expert Handling', description: 'Each piece is handled with precision and experience, ensuring delicate, designer, and everyday garments are finished to the highest standard.', icon: '⭐' },
        { title: 'Seamless Pickup & Delivery', description: 'Your clothes are collected, processed, and delivered back to your doorstep on time, making the entire experience effortless and reliable.', icon: '⭐' },
        { title: 'Consistent, Ready-to-Wear Finish', description: 'Every garment is returned fresh, neatly finished, and ready to wear, so you never have to worry about quality or presentation.', icon: '⭐' },
    ];

    howItWorks = [
        { step: '01', title: 'Schedule Online', description: 'Book a collection time from your device in under 30 seconds.' },
        { step: '02', title: 'Concierge Pickup', description: 'Our team collects your garments precisely at your requested time.' },
        { step: '03', title: 'Master Cleaning', description: 'Your clothes receive meticulous, personalized care and stain treatment.' },
        { step: '04', title: 'Pristine Delivery', description: 'Garments are delivered back flawlessly folded and ready to wear.' },
    ];

    testimonials = [
        { name: 'Abhinayee Tailam', review: 'I am absolutely thrilled with the service from Hey! Laundry! I gave them my wedding silk saree which had some very stubborn stains, and I was honestly worried. They did a phenomenal job! Not only did they completely remove the tough stains, but the saree came back looking brand new. The staff was professional, attentive, and took great care with the delicate fabric.' },
        { name: 'Vaishnavi Vardhan', review: 'I gave my sarees for dry cleaning and it was delivered to home less than the mentioned time.Its a new branch in serilingampally and service is awesome. Sarees look fresh.I would definetly reach them for future services.' },
        { name: 'Spurtti Abburi', review: 'Excellent service from start to finish with a truly premium feel.Whites come back bright, fresh, and perfectly finished.Great attention to detail in folding, packaging, and care.Smooth turnaround with consistent, dependable service.Highly recommended for high-quality laundry care' },
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