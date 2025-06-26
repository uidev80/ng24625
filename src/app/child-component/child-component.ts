// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-child-component',
//   imports: [],
//   templateUrl: './child-component.html',
//   styleUrl: './child-component.scss',
// })
// export class ChildComponent {}

// child.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  // templateUrl: './child-component.html',
  styleUrls: ['./child-component.scss'],
  template: `
    <div class="child-comp">
      <h2>Child Counter: {{ childCount }}</h2>
      <button (click)="onIncrement()">Increment</button>
      <button (click)="onDecrement()">Decrement</button>
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
