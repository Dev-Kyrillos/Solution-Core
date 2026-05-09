import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [],
  templateUrl: './vision.html',
  styleUrl: './vision.css',
})
export class Vision {
  @Input() description: string = '';

  @Input() title: string = '';

  @Input() buttonText: string = '';

  @Input() isContactStyle: boolean = false;

}
