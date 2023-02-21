import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  templateUrl: './example.component.html',
})
export class ExampleComponent implements OnInit {
  @Input() user: any;
  @Input() id: number;
  @Output() onChange: EventEmitter<boolean>;
  constructor() {
    this.onChange = new EventEmitter();
  }

  ngOnInit(): void {
    console.log('Call backend');
    console.log(this.user);
    console.log(this.id);
  }
}
