import { Component, OnInit } from '@angular/core';
import { IEventsHome } from '../../models/events-home-interface';
import { EventsServiceHome } from 'src/app/services/events-home-service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})

export class EventsComponent implements OnInit {
  events: IEventsHome[] = [];

  constructor(private _eventService: EventsServiceHome) {}

  ngOnInit():void {
    this._eventService.getEvents().subscribe((data) => {
      console.log(data)
      this.events = data;
    });
  };
};
