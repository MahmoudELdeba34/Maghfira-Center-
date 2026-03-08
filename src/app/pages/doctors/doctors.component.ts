import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorScheduleComponent } from '../../components/doctor-schedule/doctor-schedule.component';

@Component({
    selector: 'app-doctors',
    standalone: true,
    imports: [CommonModule, DoctorScheduleComponent],
    templateUrl: './doctors.component.html',
    styleUrl: './doctors.component.scss'
})
export class DoctorsComponent {
    selectedDoctor: any = null;

    doctors = [
        {
            id: 1,
            name: 'د. أحمد علي',
            specialty: 'استشاري جراحة القلب',
            degree: 'دكتوراه من جامعة لندن',
            image: 'https://i.pravatar.cc/300?u=1',
            schedule: [
                { day: 'السبت', slots: [{ time: '10:00 - 11:00', booked: true }, { time: '11:00 - 12:00', booked: false }, { time: '12:00 - 01:00', booked: false }] },
                { day: 'الأحد', slots: [{ time: '10:00 - 11:00', booked: false }, { time: '11:00 - 12:00', booked: true }, { time: '12:00 - 01:00', booked: false }] },
                { day: 'الاثنين', slots: [{ time: '04:00 - 05:00', booked: false }, { time: '05:00 - 06:00', booked: false }, { time: '06:00 - 07:00', booked: true }] },
                { day: 'الثلاثاء', slots: [{ time: '10:00 - 11:00', booked: true }, { time: '11:00 - 12:00', booked: true }, { time: '12:00 - 01:00', booked: false }] },
                { day: 'الأربعاء', slots: [{ time: '04:00 - 05:00', booked: false }, { time: '05:00 - 06:00', booked: false }, { time: '06:00 - 07:00', booked: false }] },
                { day: 'الخميس', slots: [{ time: '10:00 - 11:00', booked: false }, { time: '11:00 - 12:00', booked: false }, { time: '12:00 - 01:00', booked: true }] }
            ]
        },
        {
            id: 2,
            name: 'د. سارة محمود',
            specialty: 'استشارية طب الأطفال',
            degree: 'زمالة الكلية الملكية للأطفال',
            image: 'https://i.pravatar.cc/300?u=2',
            schedule: [
                { day: 'السبت', slots: [{ time: '01:00 - 02:00', booked: false }, { time: '02:00 - 03:00', booked: true }] },
                { day: 'الاثنين', slots: [{ time: '01:00 - 02:00', booked: false }, { time: '02:00 - 03:00', booked: false }] },
                { day: 'الأربعاء', slots: [{ time: '01:00 - 02:00', booked: true }, { time: '02:00 - 03:00', booked: false }] }
            ]
        },
        {
            id: 3,
            name: 'د. إبراهيم حسن',
            specialty: 'استشاري جراحة العظام',
            degree: 'ماجستير جراحة العظام (جامعة القاهرة)',
            image: 'https://i.pravatar.cc/300?u=3',
            schedule: [
                { day: 'الأحد', slots: [{ time: '09:00 - 10:00', booked: false }, { time: '10:00 - 11:00', booked: true }] },
                { day: 'الثلاثاء', slots: [{ time: '09:00 - 10:00', booked: false }, { time: '10:00 - 11:00', booked: false }] },
                { day: 'الخميس', slots: [{ time: '09:00 - 10:00', booked: true }, { time: '10:00 - 11:00', booked: false }] }
            ]
        },
        {
            id: 4,
            name: 'د. ليلى خالد',
            specialty: 'استشارية أمراض النساء',
            degree: 'دكتوراه طب وجراحة النساء والتوليد',
            image: 'https://i.pravatar.cc/300?u=4',
            schedule: [
                { day: 'السبت', slots: [{ time: '11:00 - 12:00', booked: false }, { time: '12:00 - 01:00', booked: false }] },
                { day: 'الاثنين', slots: [{ time: '11:00 - 12:00', booked: true }, { time: '12:00 - 01:00', booked: false }] },
                { day: 'الأربعاء', slots: [{ time: '11:00 - 12:00', booked: false }, { time: '12:00 - 01:00', booked: true }] }
            ]
        },
        {
            id: 5,
            name: 'د. محمد مصطفى',
            specialty: 'استشاري جراحة المخ والأعصاب',
            degree: 'استشاري جراحات العمود الفقري الميكروسكوبية',
            image: 'https://i.pravatar.cc/300?u=5',
            schedule: [
                { day: 'الأحد', slots: [{ time: '05:00 - 06:00', booked: false }, { time: '06:00 - 07:00', booked: false }] },
                { day: 'الثلاثاء', slots: [{ time: '05:00 - 06:00', booked: true }, { time: '06:00 - 07:00', booked: false }] },
                { day: 'الخميس', slots: [{ time: '05:00 - 06:00', booked: false }, { time: '06:00 - 07:00', booked: true }] }
            ]
        },
        {
            id: 6,
            name: 'د. ياسمين عادل',
            specialty: 'استشارية الأشعة التشخيصية',
            degree: 'خبيرة الرنين المغناطيسي والموجات الصوتية',
            image: 'https://i.pravatar.cc/300?u=6',
            schedule: [
                { day: 'السبت', slots: [{ time: '08:00 - 09:00', booked: false }, { time: '09:00 - 10:00', booked: false }] },
                { day: 'الاثنين', slots: [{ time: '08:00 - 09:00', booked: false }, { time: '09:00 - 10:00', booked: true }] },
                { day: 'الأربعاء', slots: [{ time: '08:00 - 09:00', booked: true }, { time: '09:00 - 10:00', booked: false }] }
            ]
        }
    ];

    selectDoctor(doc: any) {
        this.selectedDoctor = doc;
        window.scrollTo({ top: 300, behavior: 'smooth' });
    }

    closeDetails() {
        this.selectedDoctor = null;
    }
}
