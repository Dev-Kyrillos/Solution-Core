import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rewiew-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rewiew-section.html',
  styleUrl: './rewiew-section.css',
})
export class RewiewSection {

  testimonials = [
    {
      text: 'تعاملت مع شركة سوليوشن كور وكانت تجربة ممتازة جدًا من حيث الجودة والتواصل.',
      name: 'محمد عبدالله',
      rating: 5
    },
    {
      text: 'خدمة احترافية وسرعة في التنفيذ، أنصح بالتعامل معهم.',
      name: 'أحمد علي',
      rating: 5
    },
    {
      text: 'فريق رائع وفاهم شغله كويس جدًا.',
      name: 'عبدالله عمر',
      rating: 5
    },
    {
      text: 'أفضل تجربة تعامل في المجال الرقمي.',
      name: 'كريم حسن',
      rating: 5
    }
  ];

  videos = [
    {
      image: 'https://via.placeholder.com/200',
      name: 'محمد عبدالله'
    },
    {
      image: 'https://via.placeholder.com/200',
      name: 'عبدالله عمر'
    },
    {
      image: 'https://via.placeholder.com/200',
      name: 'أحمد علي'
    },
    {
      image: 'https://via.placeholder.com/200',
      name: 'كريم حسن'
    }
  ];

}
