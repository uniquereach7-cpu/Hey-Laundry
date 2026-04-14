import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  private readonly googleScriptUrl = 'https://script.google.com/macros/s/AKfycbxZQCDqMyD3knb61J_85_hpTrhVVYdDSiZVie3rFY-5g_wYJePo6FJSRAzzPPib48mSew/exec';
  private readonly whatsappNumber = '919949630707';

  async onSubmit() {

    if (!this.formData.name || !this.formData.email || !this.formData.phone || !this.formData.service) {
      return;
    }

    this.isSubmitting = true;
    this.submitStatus = 'idle';

    const data = {
      name: this.formData.name,
      email: this.formData.email,
      phone: this.formData.phone,
      service: this.formData.service,
      message: this.formData.message
    };

    const whatsappMessage = `Hi

New Contact Request

Name: ${this.formData.name}
Phone: ${this.formData.phone}
Email: ${this.formData.email}
Service: ${this.formData.service}
Message: ${this.formData.message}`;

    const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // ✅ Open WhatsApp instantly
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // ✅ Show success instantly (NO WAIT)
    this.submitStatus = 'success';
    this.isSubmitting = false;

    // ✅ Reset form instantly
    this.formData = {
      name: '',
      email: '',
      phone: '',
      service: 'Wash & Fold',
      message: ''
    };

    // ✅ Send to Google Sheets in background (no blocking)
    const body = new URLSearchParams();
    body.set('name', data.name);
    body.set('email', data.email);
    body.set('phone', data.phone);
    body.set('service', data.service);
    body.set('message', data.message);

    fetch(this.googleScriptUrl, {
      method: 'POST',
      mode: 'no-cors',
      body
    }).catch(err => console.error('Sheet Error:', err));

    // ✅ Hide success after 5 sec
    setTimeout(() => {
      this.submitStatus = 'idle';
    }, 5000);
  }
}
