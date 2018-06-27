import { Component, OnInit,AfterContentInit } from '@angular/core';
import { Message, User, SendMessageEvent } from '@progress/kendo-angular-conversational-ui';
declare var jQuery: any;

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss']
})
export class CommunicationComponent implements OnInit,AfterContentInit {
  height:number=200;
  public readonly user: User = {
    id: 1
  };

  public readonly bot: User = {
    id: 0
  };

  public messages: Message[] = [
  {
    author: this.user,
    text: 'Alo!',
    timestamp: new Date()
  }];

  public sendMessage(e: SendMessageEvent): void {
    this.messages = [...this.messages, e.message];
  }
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    var self = this;
    self.height=jQuery(window).height()-160;
    jQuery(window).resize(function () {
      self.height=jQuery(window).height()-160;
    });
  }
}
