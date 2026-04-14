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
    
    <!-- Global Floating WhatsApp Button -->
    <a href="https://wa.me/919949630707" target="_blank" class="global-floating-whatsapp" aria-label="Chat with us on WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
    </a>

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
  ) { }

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
