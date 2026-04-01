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
    // Added ViewChild for the video element
    @ViewChild('promoVideo') videoElement!: ElementRef<HTMLVideoElement>;

    bubbles: { id: number; left: string; size: string; delay: string; duration: string }[] = [];
    private animationObserver: IntersectionObserver | null = null;

    stats = [
        { number: '10K+', label: 'Happy Customers', emoji: '😊' },
        { number: '50K+', label: 'Clothes Washed', emoji: '👕' },
        { number: '99%', label: 'Satisfaction Rate', emoji: '⭐' },
        { number: '24hr', label: 'Turnaround Time', emoji: '⚡' },
    ];

    howItWorks = [
        { step: '01', title: 'Schedule Pickup', description: 'Book online in 30 seconds. Choose a time that works for you.', emoji: '📱' },
        { step: '02', title: 'We Collect', description: 'Our friendly team picks up your laundry from your doorstep.', emoji: '🚪' },
        { step: '03', title: 'Expert Wash', description: 'We clean your clothes with premium care and eco-friendly products.', emoji: '🫧' },
        { step: '04', title: 'Fresh Delivery', description: 'Clean, fresh clothes delivered back to you, neatly folded.', emoji: '✨' },
    ];

    testimonials = [
        { name: 'Priya S.', text: 'Hey Laundry saved my weekends! No more laundry marathons. My clothes come back smelling amazing! 🌸', rating: 5 },
        { name: 'Rahul M.', text: "Best decision ever! They handle my office shirts perfectly. I'm convinced they use magic, not detergent! 🪄", rating: 5 },
        { name: 'Ananya K.', text: 'Super affordable and the quality is top-notch. My whites are actually WHITE now! 😍', rating: 5 },
    ];

    ngOnInit() {
        this.generateBubbles();
        this.setupScrollAnimations();
    }

    // Added lifecycle hook for video autoplay
    ngAfterViewInit(): void {
        if (this.videoElement && this.videoElement.nativeElement) {
            const video = this.videoElement.nativeElement;
            video.muted = true; // Crucial to allow autoplay in modern browsers
            video.play().catch(error => {
                console.error('Video autoplay was prevented by the browser:', error);
            });
        }
    }

    ngOnDestroy() {
        if (this.animationObserver) {
            this.animationObserver.disconnect();
        }
    }

    generateBubbles() {
        for (let i = 0; i < 15; i++) {
            this.bubbles.push({
                id: i,
                left: Math.random() * 100 + '%',
                size: Math.random() * 30 + 10 + 'px',
                delay: Math.random() * 8 + 's',
                duration: Math.random() * 6 + 8 + 's',
            });
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