import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'datetime-display',
  templateUrl: './datetime-display.component.html',
  styleUrls: ['./datetime-display.component.css']
})
export class DatetimeDisplayComponent implements OnInit {
  @Input() date: Date;
  @Input() label: String;

  constructor() {
    // this.date = new Date();
  }

  ngOnInit(): void {
  }

}
