import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Notes } from '../notes';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
})
export class Child1Component {
  @Input() notes!: Notes;
  @Output() idemiter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  click() {
    this.idemiter.emit(this.notes);
  }
}
