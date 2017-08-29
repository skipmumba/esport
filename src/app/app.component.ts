import { Component } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.main.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
}
