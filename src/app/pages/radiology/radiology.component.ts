import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-radiology',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './radiology.component.html',
    styleUrl: './radiology.component.scss'
})
export class RadiologyComponent {
    services = [
        { title: 'الرنين المغناطيسي MRI', feature: 'أعلى دقة تشخيصية', details: 'جهاز 3 Tesla المتقدم يوفر فحوصات دقيقة وسريعة مع راحة تامة للمريض.' },
        { title: 'الأشعة المقطعية CT Scan', feature: '128 مقطع فائق السرعة', details: 'فحوصات سريعة جداً مع تقليل نسبة الإشعاع، مثالي لتصوير القلب والشرايين.' },
        { title: 'الموجات الصوتية (السونار)', feature: 'رباعي الأبعاد 4D', details: 'تصوير دقيق للجنين والأعضاء الداخلية بدقة متناهية.' },
        { title: 'أشعة الدوبلر', feature: 'فحص الشرايين والأوردة', details: 'قياس كفاءة تدفق الدم في الأوعية الدموية بدقة.' },
        { title: 'بانوراما الأسنان', feature: 'تصوير الفك بالكامل', details: 'ضروري لزراعة الأسنان وتقويمها بطريقة دقيقة.' },
        { title: 'الماموجرام', feature: 'الكشف المبكر لسرطان الثدي', details: 'أحدث الأجهزة للكشف الدوري والتشخيص المبكر.' }
    ];
}
