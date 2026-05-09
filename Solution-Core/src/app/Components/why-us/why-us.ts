import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [],
  templateUrl: './why-us.html',
  styleUrl: './why-us.css',
})
export class WhyUs {
  @Input() showStars: boolean = true;
  @Input() bgColor: string = '#FAF5F5';
}
