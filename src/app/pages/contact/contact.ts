import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './contact.html',
    styleUrl: './contact.css',
})
export class ContactComponent implements OnInit, OnDestroy {
    private animationObserver: IntersectionObserver | null = null;

    formData = {
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    };

    isSubmitting = false;
    isSubmitted = false;
    errorMessage = '';

    services = [
        'Wash & Fold',
        'Wash & Iron',
        'Dry Cleaning',
        'Steam Ironing',
        'Express Laundry',
        'Household Laundry',
        'Other',
    ];

    contactInfo = [
        { icon: '📧', label: 'Email Us', value: 'hello@heylaundry.in', link: 'mailto:hello@heylaundry.in' },
        { icon: '📞', label: 'Call Us', value: '+91 98765 43210', link: 'tel:+919876543210' },
        { icon: '📍', label: 'Visit Us', value: 'Your City, India', link: '#' },
        { icon: '⏰', label: 'Working Hours', value: 'Mon-Sun: 7AM - 9PM', link: '#' },
    ];

    ngOnInit() {
        // Initialize EmailJS - Replace with your public key
        emailjs.init('YOUR_PUBLIC_KEY');
        this.setupScrollAnimations();
    }

    ngOnDestroy() {
        if (this.animationObserver) {
            this.animationObserver.disconnect();
        }
    }

    async onSubmit() {
        if (!this.formData.name || !this.formData.email || !this.formData.message) {
            this.errorMessage = 'Please fill in all required fields!';
            return;
        }

        this.isSubmitting = true;
        this.errorMessage = '';

        try {
            // Replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID with your EmailJS IDs
            await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
                from_name: this.formData.name,
                from_email: this.formData.email,
                phone: this.formData.phone,
                service: this.formData.service,
                message: this.formData.message,
            });

            this.isSubmitted = true;
            this.formData = { name: '', email: '', phone: '', service: '', message: '' };
        } catch (error) {
            this.errorMessage = 'Oops! Something went wrong. Please try again or contact us directly.';
            console.error('EmailJS Error:', error);
        } finally {
            this.isSubmitting = false;
        }
    }

    resetForm() {
        this.isSubmitted = false;
        this.errorMessage = '';
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
