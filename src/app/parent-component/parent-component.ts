import { Component, OnInit, Inject } from '@angular/core';
import { CounterService } from '../counter-service';
import { ChildComponent } from '../child-component/child-component';

@Component({
  selector: 'app-parent-component',
  imports: [ChildComponent],
  // templateUrl: './parent-component.html',
  styleUrls: ['./parent-component.scss'],
  // providers: [CounterService],

  template: `
    <div>
      <h2>Parent Counter (Shared State): {{ parentCounter }}</h2>
      <app-child-component
        [childCount]="parentCounter"
        (increment)="handleIncrement()"
        (decrement)="handleDecrement()"
      ></app-child-component>
    </div>
  `,
})
export class ParentComponent implements OnInit {
  parentCounter = 0;

  constructor(@Inject(CounterService) private counterService: CounterService) {}

  ngOnInit() {
    this.counterService.counter$.subscribe((value) => {
      this.parentCounter = value;
    });
  }

  handleIncrement() {
    this.counterService.increment();
  }

  handleDecrement() {
    this.counterService.decrement();
  }
}
