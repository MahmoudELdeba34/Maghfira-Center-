import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-doctor-schedule',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './doctor-schedule.component.html',
    styleUrl: './doctor-schedule.component.scss'
})
export class DoctorScheduleComponent {
    @Input() doctor: any;
    @Output() closeDetails = new EventEmitter<void>();

    onClose() {
        this.closeDetails.emit();
    }
}
