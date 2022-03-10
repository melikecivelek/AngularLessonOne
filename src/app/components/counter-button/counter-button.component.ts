import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {


  // EventEmitter EventHandler demek bütün eventlerin delegate bu
  @Output() upEvent:EventEmitter<void> = new EventEmitter<void>();
  @Output() downEvent:EventEmitter<void> = new EventEmitter<void>();

  // public event EventHandler Changed;

  constructor() { }

  ngOnInit(): void {
  }

  CounterUp() {
    this.upEvent.emit(); // invoke yerine burada emit kullanıyoruz
  }

  CounterDown() {
    this.downEvent.emit(); // +1 -1 fırlat.
  }

}
