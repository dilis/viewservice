import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerDateTimeDisplayComponent } from './server-date-time-display.component';

describe('ServerDateTimeDisplayComponent', () => {
  let component: ServerDateTimeDisplayComponent;
  let fixture: ComponentFixture<ServerDateTimeDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerDateTimeDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerDateTimeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
