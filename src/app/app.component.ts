import { Component } from '@angular/core';
import { Usuario } from './user/Usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testAngular';
  temp = 'hola';
  myUser = new Usuario('test', '123');
  userList: Usuario[];

  constructor() {
    this.userList = [new Usuario('primero', '123'),
    new Usuario('segundo', '1234'),
    new Usuario('tercero', '1235'),
    new Usuario('cuarto', '1236')
    ];


  }
}
