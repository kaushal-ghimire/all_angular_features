import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-computed-signals',
  imports: [],
  templateUrl: './computed-signals.component.html',
  styleUrl: './computed-signals.component.css'
})
export class ComputedSignalsComponent {
  /* for computed signals */
  length = signal(20);
  breadth = signal(40);
  area = computed(() => this.length() * this.breadth());

  ngOnInit(): void {
    console.log(this.area())
  }

  increase() {
    // this.length.set(30);

    this.length.update(value => value + 10);
  }
}
