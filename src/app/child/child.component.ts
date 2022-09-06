import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  // encapsulation: ViewEncapsulation.None //使css变成全局样式
})
export class ChildComponent implements OnInit {
  // <!-- parent to child using INPUT decorator-->
  message = 'message from child'
  @Input()
  childMessage!: string;
  // <!-- child to parent using OUTPUT decorator-->
  @Output()
  messageEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(){
    this.messageEvent.emit('Hello from child')
  }

}
