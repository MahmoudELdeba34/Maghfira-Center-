import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {
    submitted = false;
    contactData = { name: '', phone: '', message: '' };

    sendMessage() {
        if (this.contactData.name && this.contactData.phone) {
            this.submitted = true;
            console.log('Contact Message:', this.contactData);
        }
    }
}
