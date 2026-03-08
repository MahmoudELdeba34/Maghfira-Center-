import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-clinics',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './clinics.component.html',
    styleUrl: './clinics.component.scss'
})
export class ClinicsComponent {
    clinics = [
        { title: 'القلب والأوعية الدموية', icon: 'heart', color: 'blue', description: 'تشخيص وعلاج أمراض القلب والشرايين باستخدام أحدث الأجهزة.' },
        { title: 'طب الأطفال', icon: 'child', color: 'teal', description: 'رعاية طبية شاملة للأطفال منذ الولادة وحتى المراهقة.' },
        { title: 'المخ والأعصاب', icon: 'brain', color: 'purple', description: 'علاج اضطرابات الجهاز العصبي والصرع والصداع المزمن.' },
        { title: 'العظام والمفاصل', icon: 'bone', color: 'blue', description: 'جراحات العظام المتقدمة وعلاج الكسور وآلام المفاصل.' },
        { title: 'الرمد والعيون', icon: 'eye', color: 'teal', description: 'فحص الإبصار وجراحات الليزك والمياه البيضاء.' },
        { title: 'الأسنان واللثة', icon: 'tooth', color: 'purple', description: 'تجميل الأسنان وزراعتها وعلاج الجذور واللثة.' },
        { title: 'الأنف والأذن والحنجرة', icon: 'ear', color: 'blue', description: 'علاج مشاكل السمع والتوازن وجراحات اللوزتين.' },
        { title: 'الجلدية والتجميل', icon: 'sparkles', color: 'teal', description: 'علاج الأمراض الجلدية وأحدث تقنيات الليزر والتجميل.' },
        { title: 'الباطنة والجهاز الهضمي', icon: 'digest', color: 'purple', description: 'تشخيص أمراض المعدة والقولون ومتابعة مرضى السكري.' }
    ];
}
