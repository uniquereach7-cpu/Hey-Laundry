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
            title: 'Luxury Wear',
            subtitle: 'Consistently Sharp. Every Time.',
            description: 'Every piece is processed with attention to detail to ensure it is clean, well-finished, and ready to wear without compromise.',
            image: 'assets/images/cat-luxury-brands.png',
            tags: ['Tuxedo', 'Suit ', ' Waistcoat', 'Gown', 'Shoes'],
            icon: '👑'
        },
        {
            title: 'Designer & Ethnic Wear',
            subtitle: 'Precision Care for Delicate Garments',
            description: 'Every piece is handled with attention to detail and processed using the right methods to ensure it is cleaned, preserved, and returned in its best condition.',
            image: 'assets/images/cat-designer-ethnic.png',
            tags: ['Sarees', 'Lehengas', 'Sherwanis', 'Anarkalis', 'Bandhani'],

        },
        {
            title: 'Office & Daily Wear',
            subtitle: 'Crisp & Professional, Every Single Day',
            description: 'Everyday garments are processed with precision to ensure they are clean, well-finished, and ready to wear without compromise.',
            image: 'assets/images/cat-office-wear.png',
            tags: ['Shirts', 'Trousers', 'T-Shirts', 'Jeans', 'Chinos', 'Formal Shoes'],

        },
        {
            title: 'Curtains & Home Linen',
            subtitle: 'Care That Extends to Your Space',
            description: 'Home fabrics are thoroughly cleaned and handled with care to maintain freshness, structure, and long-term durability.',
            image: 'assets/images/cat-curtains-linen.png',
            tags: ['Curtains', 'Bedsheets', 'Duvets', 'Towels', 'Throws'],

        },
        {
            title: 'Shoe Cleaning',
            subtitle: 'Expert Care for Every Step You Take',
            description: 'Each pair of shoes is carefully treated to ensure deep cleaning without damaging the material, keeping them fresh, hygienic, and long-lasting.',
            image: 'assets/images/Shoe-Cleaning1.jpeg',
            tags: ['Sneakers', 'Formal Shoes', 'Leather Shoes', 'Sports Shoes', 'Loafers'],

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
