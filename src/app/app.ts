import { Component, inject } from '@angular/core';
import { CounterService } from './services/counter-service/counter-service';
import { DisplayComponent } from "./components/display-component/display-component";
import { ControlsComponent } from "./components/controls-component/controls-component";
import { FlagComponent } from "./components/flag-component/flag-component";
import { ListComponent } from './components/list-component/list-component';
@Component({
  selector: 'app-root',
  imports: [DisplayComponent, ControlsComponent, FlagComponent, ListComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
