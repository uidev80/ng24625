import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * Service for managing a simple counter state using RxJS BehaviorSubject.
 * Provides observable stream for counter value and methods to increment/decrement.
 */
@Injectable({ providedIn: 'root' })
export class CounterService {
  /**
   * Internal BehaviorSubject holding the current counter value.
   * @private
   */
  private counter = new BehaviorSubject<number>(0);

  /**
   * Observable stream of the current counter value.
   */
  counter$ = this.counter.asObservable();

  /**
   * Increments the counter value by 1.
   */
  increment() {
    this.counter.next(this.counter.value + 1);
  }

  /**
   * Decrements the counter value by 1.
   */
  decrement() {
    this.counter.next(this.counter.value - 1);
  }

  /**
   * Gets the current value of the counter.
   */
  get value() {
    return this.counter.value;
  }
}
