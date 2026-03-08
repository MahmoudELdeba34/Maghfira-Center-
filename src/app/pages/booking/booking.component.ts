import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
    selector: 'app-booking',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterLink],
    templateUrl: './booking.component.html',
    styleUrl: './booking.component.scss'
})
export class BookingComponent implements OnInit {
    step = 1;
    bookingData = {
        serviceType: '',
        specialty: '',
        doctor: '',
        date: '',
        time: '',
        name: '',
        phone: ''
    };

    specialties = ['القلب والأوعية الدموية', 'طب الأطفال', 'المخ والأعصاب', 'العظام والمفاصل', 'الرمد والعيون', 'الأسنان واللثة', 'الأنف والأذن والحنجرة', 'الجلدية والتجميل', 'الباطنة والجهاز الهضمي'];
    doctors = ['د. أحمد علي', 'د. سارة محمود', 'د. إبراهيم حسن', 'د. ليلى خالد', 'د. محمد مصطفى', 'د. ياسمين عادل'];
    times = ['10:00 AM', '11:30 AM', '01:00 PM', '05:00 PM', '06:30 PM', '08:00 PM'];

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (params['specialty']) {
                this.bookingData.specialty = params['specialty'];
                this.bookingData.serviceType = 'clinic';
                this.step = 2;
            }
            if (params['doctor']) {
                this.bookingData.doctor = params['doctor'];
                this.bookingData.serviceType = 'clinic';
                this.step = 2;
                // Try to match specialty if doctor is known (simplified for now)
            }
        });
    }

    nextStep() { this.step++; }
    prevStep() { this.step--; }

    submit() {
        this.step = 4; // Success step
        console.log('Booking Data:', this.bookingData);
    }
}
