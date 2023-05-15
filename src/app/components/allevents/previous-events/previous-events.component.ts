import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-previous-events',
  templateUrl: './previous-events.component.html',
  styleUrls: ['./previous-events.component.scss']
})
export class PreviousEventsComponent {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
