import { Component, ViewChild } from '@angular/core';
import { QuestionClass } from './question-class';
import { ModalDirective } from 'ngx-bootstrap/modal';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isQuestionCardShow = false;
	public totalAnswered = 0;
	public rightAnswer: number;
	questionObj = new QuestionClass();
	@ViewChild('submitModal')
  submitModal!: ModalDirective;
	@ViewChild('addQuestionModal')
  addQuestionModal!: ModalDirective;
	@ViewChild('answerModal')
  answerModal!: ModalDirective;
	@ViewChild('questionForm') questionForm: any;
	@ViewChild('questionTest') questionTest : any;

  constructor() {
    this.rightAnswer = 0;
   }
   allQuestions: any = [{
		"id": 1,
		"question": "What is the capital of Belgium?",
		"a": "Vienna",
		"b": "Berlin",
		"c": "Brussels",
		"d": "Prague",
		"answer": "c"
	},
	{
		"id": 2,
		"question": "What is the capital of Australia?",
		"a": "Vienna",
		"b": "Canberra",
		"c": "Brussels",
		"d": "Prague",
		"answer": "b"
	},
	{
		"id": 3,
		"question": "What is the capital of Bulgaria?",
		"a": "Vienna",
		"b": "Sofia",
		"c": "Brussels",
		"d": "Prague",
		"answer": "b"
	}
	];
   addQuestion(){
		this.addQuestionModal.show();
	}
   startQuiz() {
		for (let i = 0; i < this.allQuestions.length; i++) {
			if ("selected" in this.allQuestions[i]) {
				delete this.allQuestions[i]["selected"];
			}

		}
		this.questionTest.reset();
		this.isQuestionCardShow = true;

	}
  HomePage(){

  }
  createTest(){
    
  }
  submitTest(){}
}
