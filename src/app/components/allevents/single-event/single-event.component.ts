import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-event',
  templateUrl: './single-event.component.html',
  styleUrls: ['./single-event.component.scss']
})
export class SingleEventComponent {
  // image: string;
  // title: string;
  // description: string;
  // rating: number
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() rating: number = 0;
  

}
