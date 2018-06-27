import { Component, OnInit } from '@angular/core';
import { Message, User, SendMessageEvent } from '@progress/kendo-angular-conversational-ui';

@Component({
  selector: 'app-case-message',
  templateUrl: './case-message.component.html',
  styleUrls: ['./case-message.component.scss']
})
export class CaseMessageComponent implements OnInit {

  public readonly user: User = {
    id: 1
  };

  public readonly bot: User = {
    id: 0
  };

  public messages: Message[] = [{
    author: this.bot,
    text: 'A sample message admin'
  },
  {
    author: this.user,
    text: 'A sample message user'
  }];

  public sendMessage(e: SendMessageEvent): void {
    this.messages = [...this.messages, e.message];
  }
  
  constructor() {}

  ngOnInit() {
  }

}
