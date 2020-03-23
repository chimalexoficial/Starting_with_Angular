import { Component, OnInit, Input } from '@angular/core';
import {Usuario} from './Usuario';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  // user = new Usuario('Alexa', 'aaaaa');
  @Input() user: Usuario;
  src = 'https://randomuser.me/api/portraits/women/27.jpg';
  mostrarUsuario = true;
  constructor() { }

  ngOnInit(): void {
  }
  muestra() {
    this.mostrarUsuario = !this.mostrarUsuario;
  }
}
