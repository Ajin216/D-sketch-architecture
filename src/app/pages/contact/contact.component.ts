import { Component, signal } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  isSubmitted = signal(false);

  onSubmit(event: Event) {
    event.preventDefault();
    // Simulate premium API call
    setTimeout(() => {
      this.isSubmitted.set(true);
    }, 600);
  }

  resetForm() {
    this.isSubmitted.set(false);
  }
}
