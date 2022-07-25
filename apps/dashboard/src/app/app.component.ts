import { Component } from '@angular/core';

@Component({
  selector: 'quarterback-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  links = [
    { path: '/', icon: 'home', title: 'home' },
    { path: '/quarterbacks', icon: 'view_list', title: 'quarterbacks' },
  ];
}
