import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClinicsComponent } from './pages/clinics/clinics.component';
import { RadiologyComponent } from './pages/radiology/radiology.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BookingComponent } from './pages/booking/booking.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'clinics', component: ClinicsComponent },
    { path: 'radiology', component: RadiologyComponent },
    { path: 'doctors', component: DoctorsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'booking', component: BookingComponent },
    { path: '**', redirectTo: '' }
];
