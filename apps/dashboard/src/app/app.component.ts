import { Component } from '@angular/core';

@Component({
  selector: 'mdv-seventeen-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';

  links = [
    { path: '/items', icon: 'work', title: 'Items' }
  ]
}
