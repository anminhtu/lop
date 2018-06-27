import { Component, OnInit } from '@angular/core';
import { Message, User, SendMessageEvent } from '@progress/kendo-angular-conversational-ui';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss']
})
export class CommunicationComponent implements OnInit {
  public readonly user: User = {
    id: 1
  };

  public readonly bot: User = {
    id: 0
  };

  public messages: Message[] = [
  {
    author: this.user,
    text: 'Alo!'
  }];

  public sendMessage(e: SendMessageEvent): void {
    this.messages = [...this.messages, e.message];
  }
  constructor() { }

  ngOnInit() {
  }

}
