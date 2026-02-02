import { computed, Injectable, signal, WritableSignal } from '@angular/core';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  // count = 0;
  interval: number | null = null;
  ///
  // count = signal(0);
  count : WritableSignal<number> = signal(0);

  doubleCount = computed(() => this.count() * 2);
  
  increment() {
    this.count.update(old => old + 1);
  }

  decrement() {
    this.count.update(old => old - 1);
  }

  reset() {
    this.count.set(0);
    
  }

  start() {
    if (this.interval === null) {
      this.interval = setInterval(() => {
        this.increment();
      }, 1000);
    }
  }

  stop() {
    if (this.interval !== null) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
}
