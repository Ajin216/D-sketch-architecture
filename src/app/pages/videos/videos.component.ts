import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface VideoProject {
  id: string;
  title: string;
  category: string;
  duration: string;
  thumbnailUrl: string;
  videoUrl: string;
  description: string;
}

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent {
  videos = signal<VideoProject[]>([
    {
      id: 'villa-tour',
      title: 'Lake Lugano Minimalist Villa',
      category: 'Residential Space Tour',
      duration: '01:24',
      thumbnailUrl: '/images/lakeLuganovilla.webp',
      videoUrl: '/videos/AQPLbSuzQms79UsupF9ko-b69Q4T8awTQCCXZP6_MCBjhnaL5sFAPU1WfZf1h_amqXWBue8nlZCDK85ybm_rvgOZDti9e640.mp4',
      description: 'A breathtaking tour highlighting natural light choreography, glass enclosures, and absolute geometric transparency at our Swiss lakeside retreat.'
    },
    {
      id: 'penthouse-walkthrough',
      title: 'Zurich Minimalist Penthouse',
      category: 'Interior Walkthrough',
      duration: '03:15',
      thumbnailUrl: '/images/minimalPendhhouse-converted-from-png.webp',
      videoUrl: '/videos/AQMZvqTUooQJ9FCou0Qa2jbuoYXwYIaoEyiH7Luu08d_df38AoLRt4agcE0SAwsPJuWdQ1JOzKOLfbHr_xbxrPRjx40ZVWtX.mp4',
      description: 'Reviewing bespoke structural partitions, textured oak floorboards, and floating solid concrete platforms in our premium city duplex commission.'
    },
    {
      id: 'gallery-transitions',
      title: 'Aura Curation Gallery',
      category: 'Visual Choreography',
      duration: '02:40',
      thumbnailUrl: '/images/auragGallary.webp',
      videoUrl: '/videos/AQMpzCO2hv_ZfSXoKMDhM37jIzRPmtSifzBPZm9zL33jYz1M0MhRrCRnoI-pKJNu5HOXOUmU7fVRy5WB8Ve6c-T8a9vkC_Za.mp4',
      description: 'An elegant study of modern spatial volumes, natural lighting shifts, and curated limestone walls inside our modern art showroom.'
    },
    {
      id: 'vault-pavillion',
      title: 'Monolith Concrete Pavilion',
      category: 'Bespoke Exhibition',
      duration: '02:10',
      thumbnailUrl: '/images/concreateValutePavillion.webp',
      videoUrl: '/videos/AQM3958-fnQtzr3CIY8OPTQef6N37YYd5IY6o4zB-tpIQ2mxEqxurZBNyqSQ9eT134zYFHwLslpGw594LEYp9edF1oF62P_3.mp4',
      description: 'Exploring sculptural arched vault geometry, brutalist textured ceilings, and negative space flows across this open-air museum blueprint.'
    },
    {
      id: 'studio-office',
      title: 'Vanguard Design Studio Office',
      category: 'Design Office',
      duration: '01:05',
      thumbnailUrl: '/images/designOffice.webp',
      videoUrl: '/videos/AQNl3Z-QL5qHb74fXYWhqxBsGKuP53buSnyiBi5MCV8FUUSdKW-ogc_vpUfCk99R4oejFC71WDBQHeepFUTtB0FzEhBnx1y5.mp4',
      description: 'Step inside the clean creative workspaces, material cataloguing libraries, and planning tables at our headquarters.'
    },
    {
      id: 'stone-monolith',
      title: 'Stone Monolith Geometry',
      category: 'Industrial Geometry',
      duration: '00:45',
      thumbnailUrl: '/images/stoneTable-converted-from-png.webp',
      videoUrl: '/videos/AQPSIVSe-lh1N5d9qgFvkHFf-PmYI8VosTBKKIZDDglc4VNLaMFfzI5Gy7tasZrJ3DGz9c2fPGRgXaRfNX9QToFC-LMif7tl.mp4',
      description: 'Highlighting raw material custom builds, handcrafted travertine stone edges, and minimalist tabletop visual balances.'
    }
  ]);

  activeVideo = signal<VideoProject | null>(null);

  openVideo(video: VideoProject) {
    this.activeVideo.set(video);
  }

  closeVideo() {
    this.activeVideo.set(null);
  }
}
