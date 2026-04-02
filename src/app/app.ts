import { Component, OnInit, Inject, PLATFORM_ID, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  template: `
    @if (isLoading) {
      <div class="luxury-preloader">
        <img src="assets/images/logo.png" alt="Hey Laundry Loading" class="loader-logo" />
        <div class="loader-line-wrap"><div class="loader-line"></div></div>
      </div>
    }
    <app-header></app-header>
    <div class="page-transition-wrapper">
      <router-outlet></router-outlet>
    </div>
    <app-footer></app-footer>
  `,
  styleUrl: './app.css'
})
export class AppComponent implements OnInit, AfterViewInit {
  isLoading = true;
  private observer: IntersectionObserver | null = null;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden';
      // Simulate highly elegant premium loading delay
      setTimeout(() => {
        const preloader = document.querySelector('.luxury-preloader');
        if (preloader) {
          preloader.classList.add('fade-out');
          setTimeout(() => {
            this.isLoading = false;
            document.body.style.overflow = '';
            this.cdr.detectChanges();
          }, 800);
        } else {
            this.isLoading = false;
            document.body.style.overflow = '';
            this.cdr.detectChanges();
        }
      }, 1500);

      // Re-initialize animations on route changes
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        if (!this.isLoading) {
          setTimeout(() => this.initScrollAnimations(), 100);
        }
      });
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
       setTimeout(() => this.initScrollAnimations(), 2000);
    }
  }

  private initScrollAnimations() {
    if (!isPlatformBrowser(this.platformId)) return;

    if (this.observer) {
        this.observer.disconnect();
    }

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          // For most elements, we keep them visible after they animate in.
          // For the stack cards, their stickiness logic handles their reverse movement.
        } else {
            // Optional: remove class when scrolling up if needed
            const rect = entry.target.getBoundingClientRect();
            if (rect.top > 0) {
               entry.target.classList.remove('animate-in');
            }
        }
      });
    }, options);

    // Observe all reveal elements
    const elements = document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale');
    elements.forEach(el => {
      // Reset state for new pages
      el.classList.remove('animate-in');
      this.observer?.observe(el);
    });
  }
}
