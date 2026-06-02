import { Component, signal, computed } from '@angular/core';

interface GalleryItem {
  id: number;
  title: string;
  category: 'residential' | 'commercial' | 'kitchens' | 'ceilings' | 'exteriors';
  gridClass: string;
  aspectClass: string;
  location: string;
  year: string;
  imageUrl: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  selectedFilter = signal<'all' | 'residential' | 'commercial' | 'kitchens' | 'ceilings' | 'exteriors'>('all');
  activeLightbox = signal<GalleryItem | null>(null);

  projects = signal<GalleryItem[]>([
    {
      id: 1,
      title: 'Terracotta Courtyard Villa',
      category: 'residential',
      gridClass: 'md:col-span-2 md:row-span-2',
      aspectClass: 'aspect-square md:aspect-auto md:min-h-[550px]',
      location: 'Malappuram, Kerala',
      year: '2025',
      imageUrl: '/images/lakeLuganovilla.webp',
    },
    {
      id: 2,
      title: 'Teakwood Minimalist Haven',
      category: 'residential',
      gridClass: 'md:col-span-1 md:row-span-1',
      aspectClass: 'aspect-[4/3] md:aspect-square',
      location: 'Calicut, Kerala',
      year: '2024',
      imageUrl: '/images/firstimage.webp',
    },
    {
      id: 3,
      title: 'Bespoke Walnut Showroom',
      category: 'commercial',
      gridClass: 'md:col-span-1 md:row-span-2',
      aspectClass: 'aspect-[3/4] md:aspect-auto md:min-h-[550px]',
      location: 'Mongam, Kerala',
      year: '2025',
      imageUrl: '/images/auragGallary.webp',
    },
    {
      id: 4,
      title: 'Aura Ceiling Curation',
      category: 'ceilings',
      gridClass: 'md:col-span-1 md:row-span-1',
      aspectClass: 'aspect-[4/3] md:aspect-square',
      location: 'Cochin, Kerala',
      year: '2025',
      imageUrl: '/images/lightCoreography4.webp',
    },
    {
      id: 5,
      title: 'Modern Tropical Pavilion',
      category: 'exteriors',
      gridClass: 'md:col-span-2 md:row-span-1',
      aspectClass: 'aspect-[2/1] md:aspect-auto md:h-[260px]',
      location: 'Ernakulam, Kerala',
      year: '2025',
      imageUrl: '/images/concreateValutePavillion.webp',
    },
    {
      id: 6,
      title: 'D-SKETCH Mongam Head Office',
      category: 'commercial',
      gridClass: 'md:col-span-1 md:row-span-1',
      aspectClass: 'aspect-[4/3] md:aspect-square',
      location: 'Mongam, Kerala',
      year: '2024',
      imageUrl: '/images/designOffice.webp',
    },
    {
      id: 7,
      title: 'Premium Teak Modular Kitchen',
      category: 'kitchens',
      gridClass: 'md:col-span-1 md:row-span-1',
      aspectClass: 'aspect-[4/3] md:aspect-square',
      location: 'Manjeri, Kerala',
      year: '2025',
      imageUrl: '/images/custom1.webp',
    },
    {
      id: 8,
      title: 'Lakefront Concrete Pavilion',
      category: 'exteriors',
      gridClass: 'md:col-span-1 md:row-span-1',
      aspectClass: 'aspect-[4/3] md:aspect-square',
      location: 'Calicut, Kerala',
      year: '2024',
      imageUrl: '/images/minimalistLake.webp',
    }
  ]);

  filteredProjects = computed(() => {
    const filter = this.selectedFilter();
    if (filter === 'all') {
      return this.projects();
    }
    return this.projects().filter(item => item.category === filter);
  });

  setFilter(filter: 'all' | 'residential' | 'commercial' | 'kitchens' | 'ceilings' | 'exteriors') {
    this.selectedFilter.set(filter);
  }

  openLightbox(item: GalleryItem) {
    this.activeLightbox.set(item);
  }

  closeLightbox() {
    this.activeLightbox.set(null);
  }
}
