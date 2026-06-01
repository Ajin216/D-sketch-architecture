import { Component, signal, computed } from '@angular/core';

interface GalleryItem {
  id: number;
  title: string;
  category: 'residential' | 'commercial' | 'bespoke';
  gridClass: string;
  aspectClass: string;
  spec: string;
  dimensions: string;
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
  selectedFilter = signal<'all' | 'residential' | 'commercial' | 'bespoke'>('all');

  projects = signal<GalleryItem[]>([
    {
      id: 1,
      title: 'Lake Lugano Villa',
      category: 'residential',
      gridClass: 'md:col-span-2 md:row-span-2',
      aspectClass: 'aspect-square md:aspect-auto md:min-h-[500px]',
      spec: 'Lugano, CH - 2025',
      dimensions: '800x800',
      imageUrl: '/images/lakeLuganovilla.webp',
    },
    {
      id: 2,
      title: 'Zurich Minimal Penthouse',
      category: 'residential',
      gridClass: 'md:col-span-1 md:row-span-1',
      aspectClass: 'aspect-[4/3] md:aspect-square',
      spec: 'Zurich, CH - 2024',
      dimensions: '400x400',
      imageUrl: '/images/minimalPendhhouse-converted-from-png.webp',
    },
    {
      id: 3,
      title: 'Aura Gallery Hall',
      category: 'commercial',
      gridClass: 'md:col-span-1 md:row-span-2',
      aspectClass: 'aspect-[3/4] md:aspect-auto md:min-h-[500px]',
      spec: 'Geneva, CH - 2025',
      dimensions: '400x800',
      imageUrl: '/images/auragGallary.webp',
    },
    {
      id: 4,
      title: 'Stone Monolith Table',
      category: 'bespoke',
      gridClass: 'md:col-span-1 md:row-span-1',
      aspectClass: 'aspect-[4/3] md:aspect-square',
      spec: 'Bespoke Curation - 2025',
      dimensions: '400x400',
      imageUrl: '/images/stoneTable-converted-from-png.webp',
    },
    {
      id: 5,
      title: 'Concrete Vault Pavilion',
      category: 'bespoke',
      gridClass: 'md:col-span-2 md:row-span-1',
      aspectClass: 'aspect-[2/1] md:aspect-auto md:h-[234px]',
      spec: 'Basel, CH - 2024',
      dimensions: '800x400',
      imageUrl: '/images/concreateValutePavillion.webp',
    },
    {
      id: 6,
      title: 'Vanguard Design Office',
      category: 'commercial',
      gridClass: 'md:col-span-1 md:row-span-1',
      aspectClass: 'aspect-[4/3] md:aspect-square',
      spec: 'Zurich, CH - 2023',
      dimensions: '400x400',
      imageUrl: '/images/designOffice.webp',
    },
  ]);

  filteredProjects = computed(() => {
    const filter = this.selectedFilter();
    if (filter === 'all') {
      return this.projects();
    }
    return this.projects().filter(item => item.category === filter);
  });

  setFilter(filter: 'all' | 'residential' | 'commercial' | 'bespoke') {
    this.selectedFilter.set(filter);
  }
}
