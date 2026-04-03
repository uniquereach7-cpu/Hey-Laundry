import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    service: 'Wash & Fold',
    message: ''
  };

  isSubmitting = false;
  submitStatus: string = 'idle';

  async onSubmit() {
    this.isSubmitting = true;
    this.submitStatus = 'idle';

    try {
      // Send the email using EmailJS
      // Ensure you replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_PUBLIC_KEY' with your actual EmailJS details.
      await emailjs.send(
        'service_id', 
        'template_id', 
        {
          from_name: this.formData.name,
          reply_to: this.formData.email,
          phone: this.formData.phone,
          service_requested: this.formData.service,
          message: this.formData.message,
          to_name: 'Hey Laundry Team'
        },
        'public_key'
      );

      this.submitStatus = 'success';
      // Reset form on success
      this.formData = {
        name: '',
        email: '',
        phone: '',
        service: 'Wash & Fold',
        message: ''
      };
    } catch (error) {
      console.error('FAILED...', error);
      this.submitStatus = 'error';
    } finally {
      this.isSubmitting = false;
      setTimeout(() => {
        if (this.submitStatus === 'success') {
          this.submitStatus = 'idle';
        }
      }, 5000); // Reset status messages after 5 seconds
    }
  }
}
