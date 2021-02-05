import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'server-datetime-display',
  templateUrl: './server-date-time-display.component.html',
  styleUrls: ['./server-date-time-display.component.css']
})
export class ServerDateTimeDisplayComponent implements OnInit {
  @Input() date:Date;
  @Input() label: String;
  @Input() iso8601: String;
  @Input() tz: String;

  constructor() { }

  ngOnInit(): void {
  }

}
