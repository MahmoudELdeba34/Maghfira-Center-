import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-doctors',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './doctors.component.html',
    styleUrl: './doctors.component.scss'
})
export class DoctorsComponent {
    doctors = [
        { name: 'د. أحمد علي', specialty: 'استشاري جراحة القلب', degree: 'دكتوراه من جامعة لندن', image: 'https://i.pravatar.cc/300?u=1' },
        { name: 'د. سارة محمود', specialty: 'استشارية طب الأطفال', degree: 'زمالة الكلية الملكية للأطفال', image: 'https://i.pravatar.cc/300?u=2' },
        { name: 'د. إبراهيم حسن', specialty: 'استشاري جراحة العظام', degree: 'ماجستير جراحة العظام (جامعة القاهرة)', image: 'https://i.pravatar.cc/300?u=3' },
        { name: 'د. ليلى خالد', specialty: 'استشارية أمراض النساء', degree: 'دكتوراه طب وجراحة النساء والتوليد', image: 'https://i.pravatar.cc/300?u=4' },
        { name: 'د. محمد مصطفى', specialty: 'استشاري جراحة المخ والأعصاب', degree: 'استشاري جراحات العمود الفقري الميكروسكوبية', image: 'https://i.pravatar.cc/300?u=5' },
        { name: 'د. ياسمين عادل', specialty: 'استشارية الأشعة التشخيصية', degree: 'خبيرة الرنين المغناطيسي والموجات الصوتية', image: 'https://i.pravatar.cc/300?u=6' }
    ];
}
