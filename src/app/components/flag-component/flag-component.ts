import { Component, effect, inject } from '@angular/core';
import { CounterService } from '../../services/counter-service/counter-service';
import { EmotionService } from '../../services/emotion-service/emotion-service';
@Component({
  selector: 'app-flag-component',
  imports: [],
  templateUrl: './flag-component.html',
  styleUrl: './flag-component.scss',
})
export class FlagComponent {
counter = inject(CounterService);
emotionService = inject(EmotionService);
constructor() {
    effect(() => {
      console.log(`ControlsComponent count: ${this.counter.count()}`);
      console.log(`ControlsComponent emotion: ${this.emotionService.emotion()}`);
    });
  }
}
