import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { DatetimeDisplayComponent } from './components/datetime-display/datetime-display.component';
import { TimeDisplayComponent } from './components/time-display/time-display.component';
import { DateDisplayComponent } from './components/date-display/date-display.component';
import { ServerDateTimeDisplayComponent } from './components/server-date-time-display/server-date-time-display.component';

@NgModule({
  declarations: [
    AppComponent,
    DatetimeDisplayComponent,
    TimeDisplayComponent,
    DateDisplayComponent,
    ServerDateTimeDisplayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
