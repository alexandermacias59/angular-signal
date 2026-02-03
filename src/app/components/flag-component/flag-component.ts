import { Component, effect, inject, signal } from '@angular/core';
import { CounterService } from '../../services/counter-service/counter-service';
import { EmotionService } from '../../services/emotion-service/emotion-service';
@Component({
  selector: 'app-flag-component',
  imports: [],
  templateUrl: './flag-component.html',
  styleUrl: './flag-component.scss',
})
export class FlagComponent {
state = signal("");
counter = inject(CounterService);
emotionService = inject(EmotionService);
constructor() {
    effect(() => {
      this.state.set("I'm " + this.emotionService.emotion() + " and my count is " + this.counter.counterState());
    });
  }
}
