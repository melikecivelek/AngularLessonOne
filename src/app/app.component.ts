import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularLesson01';

  constructor() {
    setTheme('bs5');
  }
  // mvc uygulamalarında layout olarak kullanılır.
}
