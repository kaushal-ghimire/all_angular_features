import { Component, effect, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-writable-signals',
  imports: [],
  templateUrl: './writable-signals.component.html',
  styleUrl: './writable-signals.component.css'
})
export class WritableSignalsComponent implements OnInit {

  /* without writable signals */
  // count = 0;

  /* with writable signals */
  count = signal(0);

  colors = signal(["red", "green"]);

  constructor() {
    effect(() => {
      console.log("Effects due to count signal is trigerred", this.count());
    });
    effect(() => {
      console.log("Effects due to color signal is trigerred", this.colors());
    });
  }

  ngOnInit(): void {
    console.log(this.count())
  }

  increase() {
    /* without writable signals */
    // this.count = this.count + 1;

    /* with writable signals -> set() method */
    // this.count.set(this.count() + 1);

    /* with writable signals -> update() method */
    this.count.update(values => values + 1);

    /* with writable signals -> update() method to update values in array in angular 19 whereas angular 16 uses mutate() method with push() */
    this.colors.update(colors => [...colors, 'blue']);
    // console.log(this.colors());
  }

}
