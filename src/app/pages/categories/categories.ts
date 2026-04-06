import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-categories',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './categories.html',
    styleUrl: './categories.css',
})
export class CategoriesComponent implements OnInit, OnDestroy {
    private observer: IntersectionObserver | null = null;
    activeServiceTab = 0;

    services = [
        {
            title: 'Premium Dry Cleaning',
            tagline: 'Couture-Grade Solvent Care',
            icon: '🧥',
            description: 'Our signature dry cleaning process uses eco-friendly, imported solvents that gently dissolve stains while preserving the integrity of delicate fabrics. Every garment is hand-inspected, meticulously cleaned, and finished with precision pressing.',
            features: ['GreenEarth® Solvents', 'Hand-Finished Detailing', 'Colour Protection Shield', 'Museum-Quality Packaging'],
            image: 'assets/images/luxury-drycleaning.png',
            accent: 'gold'
        },
        {
            title: 'Premium Laundry',
            tagline: 'Elevated Everyday Care',
            icon: '👔',
            description: 'Transform your daily wardrobe with our premium laundry service. We use RO-purified water, pH-balanced detergents, and temperature-controlled wash cycles to ensure every fibre is treated with the utmost respect.',
            features: ['RO-Purified Water Wash', 'Colour Segregation', 'Fabric-Specific Cycles', 'Tissue-Wrapped Delivery'],
            image: 'assets/images/hey7.jpg',
            accent: 'navy'
        },
        {
            title: 'Steam Press Only',
            tagline: 'Wrinkle-Free Perfection',
            icon: '♨️',
            description: 'Our state-of-the-art Italian steam presses deliver a crisp, wrinkle-free finish without harsh contact. Ideal for delicate silks, fine cotton shirts, and garments that need a quick refresh between washes.',
            features: ['Contactless Steam Technology', 'Safe for Delicates', 'Crease-Sharp Finish', 'Same-Day Available'],
            image: 'assets/images/hey9.jpg',
            accent: 'gold'
        },
        {
            title: 'Wash & Iron',
            tagline: 'Boardroom-Ready Always',
            icon: '👕',
            description: 'The complete garment care solution—deep cleaned with premium detergents and professionally pressed for a polished, boardroom-ready finish. Hand-finished collars, cuffs, and pleats ensure impeccable results every time.',
            features: ['Deep Soil Extraction', 'Hand-Finished Collars', 'Anti-Wrinkle Treatment', 'Hanger Delivery'],
            image: 'assets/images/luxury-care.png',
            accent: 'navy'
        },
        {
            title: 'Wash & Fold',
            tagline: 'Effortless Everyday Fresh',
            icon: '🧺',
            description: 'Your daily essentials, washed with care and expertly folded. We sort by colour, use gentle eco-friendly products, and deliver your garments neatly folded and wrapped—ready to be put away instantly.',
            features: ['Precise Colour Sorting', 'Eco-Friendly Products', 'Expert Master Folding', 'Neatly Packaged'],
            image: 'assets/images/luxury-linens.png',
            accent: 'gold'
        }
    ];

    garmentCategories = [
        {
            title: 'Luxury Brands',
            subtitle: 'White-Glove Treatment for Prestigious Labels',
            description: 'We understand the craftsmanship behind every luxury piece. From Gucci to Louis Vuitton, our certified specialists handle each garment with the reverence it deserves—using brand-recommended care protocols.',
            image: 'assets/images/cat-luxury-brands.png',
            tags: ['Gucci', 'Prada', 'Louis Vuitton', 'Burberry', 'Armani'],
            icon: '👑'
        },
        {
            title: 'Designer & Ethnic Wear',
            subtitle: 'Artisanal Care for Exquisite Craftsmanship',
            description: 'From hand-embroidered lehengas to intricately woven Banarasi sarees, our artisans specialize in preserving the beauty of ethnic and designer pieces with gentle, fiber-specific cleaning techniques.',
            image: 'assets/images/cat-designer-ethnic.png',
            tags: ['Sarees', 'Lehengas', 'Sherwanis', 'Anarkalis', 'Bandhani'],
            icon: '✨'
        },
        {
            title: 'Office & Daily Wear',
            subtitle: 'Crisp & Professional, Every Single Day',
            description: 'Keep your everyday wardrobe looking sharp and fresh. Our efficient process ensures your shirts, trousers, and casual wear are immaculately cleaned, pressed, and ready for whatever the day brings.',
            image: 'assets/images/cat-office-wear.png',
            tags: ['Shirts', 'Trousers', 'T-Shirts', 'Jeans', 'Chinos'],
            icon: '💼'
        },
        {
            title: 'Curtains & Home Linen',
            subtitle: 'Refresh Your Living Spaces',
            description: 'Extend our luxury care to your home. From heavy drapes and delicate sheers to premium bed linen and towels—we deep clean, deodorize, and restore your home textiles to their original glory.',
            image: 'assets/images/cat-curtains-linen.png',
            tags: ['Curtains', 'Bedsheets', 'Duvets', 'Towels', 'Throws'],
            icon: '🏠'
        }
    ];

    setActiveTab(index: number) {
        this.activeServiceTab = index;
    }

    ngOnInit() {
        this.setupScrollAnimations();
    }

    ngOnDestroy() {
        this.observer?.disconnect();
    }

    private setupScrollAnimations() {
        if (typeof IntersectionObserver !== 'undefined') {
            this.observer = new IntersectionObserver(
                (entries) => entries.forEach((e) => {
                    if (e.isIntersecting) e.target.classList.add('animate-in');
                }),
                { threshold: 0.1 }
            );
            setTimeout(() => {
                document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale').forEach((el) =>
                    this.observer?.observe(el)
                );
            }, 100);
        }
    }
}
