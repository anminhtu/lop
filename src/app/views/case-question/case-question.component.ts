import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { GridComponent } from '../../../views/shared/grid/grid.component';

@Component({
  selector: 'app-case-question',
  templateUrl: './case-question.component.html',
  styleUrls: ['./case-question.component.scss']
})
export class CaseQuestionComponent implements OnInit {
  gridDataSource:any;
  items:any[]=[];
  gridColumns:any[]=[];
  @ViewChild('detailTemplate')  detailTemplate : TemplateRef<any>;
  @ViewChild(GridComponent) grid;
  isWarningChecked = false
  
  constructor() { }

  ngOnInit() {
    this.gridColumns=[
      {Field:"No",Title:"No",Width:80},
      {Field:"Question",Title:"Content", Template:  this.detailTemplate}
    ];
    this.items=[
      {
        "No": "1",
        "Question": "How long ago did you first notice any signs of hair loss?",
        "IsWaring": true,
        "Answer": "6",
        "SubAnswer" : [
            {
                "Question": "sub question 1?",
                "Answer": "12"
            }
        ]
    },
    {
        "No": "2",
        "Question": "What symptoms of hair loss have you noticed?",
        "Answer": "Thinning at the front of hairline"
    },{
        "No": "3",
        "Question": "What treatments have you already tried?",
        "IsWaring": true,
        "Answer": "None"
    },{
        "No": "4",
        "Question": "Do other people in your family have hair loss?",
        "Answer": "Yes"
    },{
        "No": "5",
        "Question": "What relatives have hair loss?",
        "Answer": "Father's side"
    },{
        "No": "6",
        "Question": "Do you have any issues with sexual dysfunction currently?",
        "IsWaring": true,
        "Answer": "No, not experiencing any sexual dysfunction"
    }];
    this.gridDataSource={
      data:this.items,
      total:this.items.length
    };
  }

}