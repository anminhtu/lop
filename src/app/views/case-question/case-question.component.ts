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
        "Question": "How may we help you today?",
        "Answer": "Start ED or PE treatment"
    },
    {
        "No": "2",
        "Question": "What are the symptoms that you currently having?",
        "Answer": " Problems maintaining an erection during masturbation"
    },{
        "No": "3",
        "Question": "When are you having trouble maintaining your erection?",
        "IsWaring": true,
        "Answer": "With Alcohol, When stressed"
    },{
        "No": "4",
        "Question": "How long ago did you notice that you could not maintain or have an erection?",
        "Answer": "Less than 1 month"
    },{
        "No": "5",
        "Question": "Do you still have interest in having sex?",
        "Answer": "No",
        "IsWaring": true,
        "SubAnswer" : [
            {
                "Question": "Please explain?",
                "Answer": "abc xyz"
            }
        ]
    },{
        "No": "6",
        "Question": "Any new stressors, or life changes?",
        "Answer": "Not sure"
    },{
        "No": "7",
        "Question": "Have you had a Blood pressure reading in the last 30 days?",
        "Answer": "Yes"
    },{
        "No": "8",
        "Question": "What is your current weight?",
        "Answer": "100"
    },{
        "No": "9",
        "Question": "Do you currently smoke?",
        "Answer": "Yes"
    },{
        "No": "10",
        "Question": "How many cig per day?",
        "Answer": "Half pack per day"
    },{
        "No": "11",
        "Question": "Have you had any surgeries?",
        "Answer": "No"
    }];
    this.gridDataSource={
      data:this.items,
      total:this.items.length
    };
  }

}
