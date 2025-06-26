import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  // templateUrl: './child-component.html',
  template: `
    <div class="child-comp">
      <h2>Child Counter: {{ childCount }}</h2>
      <button class="mx-3 btn btn-primary" (click)="onIncrement()">
        Increment
      </button>
      <button class="btn btn-success" (click)="onDecrement()">Decrement</button>
    </div>
  `,
})
export class ChildComponent {
  @Input() childCount: number = 0;
  @Output() increment = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();

  onIncrement() {
    this.increment.emit();
  }

  onDecrement() {
    this.decrement.emit();
  }
}
