import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.css']
})

export class TimeDisplayComponent implements OnInit {
  @Input() time: Date;

  constructor() { }

  ngOnInit(): void {

  }

}
