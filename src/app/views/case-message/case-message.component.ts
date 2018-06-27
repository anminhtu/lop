import { Component, OnInit } from '@angular/core';
import { Message, User, SendMessageEvent } from '@progress/kendo-angular-conversational-ui';
import { CommonService } from '../../../services/common-service';

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
  dataNote = [];
  note: Note = new Note();
  ngOnInit() {
    this.dataNote = [
      {Id: 1, DateTime: "06/12/2018 8:50 AM", Content: "Content 1"},
      {Id: 2, DateTime: "06/15/2018 8:50 AM", Content: "Content 2"},
      {Id: 3, DateTime: "06/18/2018 8:50 AM", Content: "Content 3"},
      {Id: 4, DateTime: "06/22/2018 8:50 AM", Content: "Content 4"},
      {Id: 5, DateTime: "06/25/2018 8:50 AM", Content: "Content 5"},
    ];
  }
  sendNote(){
    if (this.note.Content != ""){
      var dateCurrent = CommonService.formatDatetime(new Date()); 
      this.note.DateTime = dateCurrent.toString();
      this.dataNote.push(this.note);
    }
  }
}

class Note  {
  Id: number;
  Content: string;
  DateTime: string;
}