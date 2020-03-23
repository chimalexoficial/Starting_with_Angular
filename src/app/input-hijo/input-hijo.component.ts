import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-input-hijo',
  templateUrl: './input-hijo.component.html',
  styleUrls: ['./input-hijo.component.scss']
})
export class InputHijoComponent implements OnInit {
  @Input()
  textoHijo: string;
  constructor() { }

  ngOnInit(): void {
  }

}
