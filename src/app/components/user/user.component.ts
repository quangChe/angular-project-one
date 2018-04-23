import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  // template: `<h2>Hello {{name}}</h2>`
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  name = 'Quang';
}
