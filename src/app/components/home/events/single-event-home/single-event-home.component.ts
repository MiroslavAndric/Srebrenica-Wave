import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-single-event-home',
  templateUrl: './single-event-home.component.html',
  styleUrls: ['./single-event-home.component.scss']
})
export class SingleEventHomeComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() date: string = '';
}
