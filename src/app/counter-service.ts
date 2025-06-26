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
  private serviceCounter = new BehaviorSubject<number>(0);

  /**
   * Observable stream of the current serviceCounter value.
   */
  counter$ = this.serviceCounter.asObservable();

  /**
   * Increments the serviceCounter value by 1.
   */
  increment() {
    this.serviceCounter.next(this.serviceCounter.value + 1);
  }

  /**
   * Decrements the serviceCounter value by 1.
   */
  decrement() {
    this.serviceCounter.next(this.serviceCounter.value - 1);
  }

  /**
   * Gets the current value of the serviceCounter.
   */
  get value() {
    return this.serviceCounter.value;
  }
}
