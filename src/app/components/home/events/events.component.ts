import { Component, Input } from '@angular/core';
import { SingleEventComponent } from '../../allevents/single-event/single-event.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  @Input() events! :SingleEventComponent;
  @Input() title: string = '';
  @Input() description: string = '';
}
