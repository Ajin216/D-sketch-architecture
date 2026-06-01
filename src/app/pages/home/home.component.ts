import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  activeSlide = signal(0);
  
  slides = [
    { url: '/images/custom1.webp', title: 'Architectural Space Curation' },
    { url: '/images/auraCreation.webp', title: 'Minimalist Architecture Concept' },
    { url: '/images/interior2.webp', title: 'High-End Bespoke Curation' }
  ];

  ngOnInit() {
    setInterval(() => {
      this.activeSlide.update(idx => (idx + 1) % this.slides.length);
    }, 5000);
  }

  setSlide(index: number) {
    this.activeSlide.set(index);
  }
}
