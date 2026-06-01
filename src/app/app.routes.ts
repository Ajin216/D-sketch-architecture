import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'D sketch architecture | Home'
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent),
    title: 'D sketch architecture | Services'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'D sketch architecture | About Us'
  },
  {
    path: 'gallery',
    loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryComponent),
    title: 'D sketch architecture | Gallery'
  },
  {
    path: 'videos',
    loadComponent: () => import('./pages/videos/videos.component').then(m => m.VideosComponent),
    title: 'D sketch architecture | Videos'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'D sketch architecture | Contact'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

