import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-writable-signals',
  imports: [],
  templateUrl: './writable-signals.component.html',
  styleUrl: './writable-signals.component.css'
})
export class WritableSignalsComponent implements OnInit {

  // count = 0;

  count = signal(0)

  constructor() { }

  ngOnInit(): void {
    console.log(this.count())
  }

  increase() {
    // this.count = this.count + 1;
    this.count.set(this.count() + 1);
  }

}
