import {Component} from '@angular/core';
import {Page} from "./models/family";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  page: Page = {
    families: [
      {
        name: 'Family 1',
        values: [
          {
            id: '1',
            value: 'Value 1',
          },
          {
            id: '2',
            value: 'Value 2',
          }
        ]
      },
      {
        name: 'Family 2',
        values: []
      }
    ]
  }
}
