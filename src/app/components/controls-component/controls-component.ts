import { Component, effect, inject } from '@angular/core';
import { CounterService } from '../../services/counter-service/counter-service';
import { EmotionService } from '../../services/emotion-service/emotion-service';

@Component({
  selector: 'app-controls-component',
  imports: [],
  templateUrl: './controls-component.html',
  styleUrl: './controls-component.scss',
})
export class ControlsComponent {
count = inject(CounterService)

emotionService = inject(EmotionService);
}
