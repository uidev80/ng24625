import { TestBed } from '@angular/core/testing';

import { CounterService } from './counter-service';

/**
 * Unit tests for {@link CounterService}.
 *
 * This test suite verifies:
 * - Service creation
 * - Initial counter value
 * - Increment and decrement functionality
 * - Emission of new values via the observable stream
 */
describe('CounterService', () => {
  let service: CounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have initial value 0', () => {
    expect(service.value).toBe(0);
  });

  it('should increment the counter', () => {
    service.increment();
    expect(service.value).toBe(1);
    service.increment();
    expect(service.value).toBe(2);
  });

  it('should decrement the counter', () => {
    service.increment();
    service.increment();
    service.decrement();
    expect(service.value).toBe(1);
    service.decrement();
    expect(service.value).toBe(0);
  });

  it('should emit new values via counter$', (done) => {
    const emitted: number[] = [];
    const sub = service.counter$.subscribe((val) => {
      emitted.push(val);
      if (emitted.length === 3) {
        expect(emitted).toEqual([0, 1, 2]);
        sub.unsubscribe();
        done();
      }
    });
    service.increment();
    service.increment();
  });
});
