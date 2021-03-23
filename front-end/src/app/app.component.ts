import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from '../../node_modules/ngx-bootstrap/modal';
import { QuestionClass } from './question-class';
import {TestService} from './shared/services/test.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public isQuestionCardShow = false;
  public allTests= [];
    public createdTest = '';
	public testDescription = '';
	public totalAnswered = 0;
	public rightAnswer =0;
	public test = new QuestionClass();
	public questionObj: Array<any>=[];
	public answerObj: Array<any>=[];
	@ViewChild('submitModal')
  submitModal!: ModalDirective;
	@ViewChild('addQuestionModal')
  addQuestionModal!: ModalDirective;
  @ViewChild('testModal')
  testModal!: ModalDirective;
	@ViewChild('answerModal')
  answerModal!: ModalDirective;
	@ViewChild('questionForm') questionForm: any;
	@ViewChild('questionTest') questionTest : any;

  constructor(public testService: TestService) {
	  
    for (let i = 0; i < 8; i++) {
		this.questionObj.push(new QuestionClass());
	  }
	  for (let i = 0; i < 8; i++) {
		this.answerObj.push(new QuestionClass());
	  }
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
	submitTest() {
		this.rightAnswer = 0;
		this.totalAnswered = 0;
		for (let i = 0; i < this.allQuestions.length; i++) {
			if ("selected" in this.allQuestions[i] && (this.allQuestions[i]["selected"] != null)) {
				this.totalAnswered++;
				if (this.allQuestions[i]["selected"] == this.allQuestions[i]["answer"]) {
					this.rightAnswer++;
				}
			}

		}
		this.submitModal.show();

	}

	startQuiz() {
		for (let i = 0; i < this.allQuestions.length; i++) {
			if ("selected" in this.allQuestions[i]) {
				delete this.allQuestions[i]["selected"];
			}

		}
	//	this.questionTest.reset();
		this.testModal.show();
		this.isQuestionCardShow = true;

	}
	HomePage() {
		this.isQuestionCardShow = false;
	}
	addQuestion(){
		this.addQuestionModal.show();
	}
	async submitAddQuestion(){
		const quesTemp = JSON.parse(JSON.stringify(this.questionObj));
		const simpleQuestions = quesTemp.filter((el: any)=> !el.hasOwnProperty('a'));
		const MultipleChoiceQuestions = quesTemp.filter((el: any)=> el.hasOwnProperty('a'));
		const test = {
			name: this.createdTest,
			date: new Date(),
			Description: this.testDescription,
			SimpleQuestions: simpleQuestions,
			MultipleChoiceQuestions: MultipleChoiceQuestions,
		}
		
		await this.testService.createTest(test);
		
		quesTemp["id"] = this.allQuestions.length+1;
		this.allQuestions.push(quesTemp);
		this.questionForm.reset();
	//	this.toastr.success("Question Added Successfully!!");
		this.addQuestionModal.hide();

	}
	checkAnswers(){
		this.submitModal.hide();
		this.answerModal.show();
	}

	async ngOnInit() {
		this.allTests = await this.testService.getTestsRecords();
		console.log('=======:', this.allTests);
	}
	createTest(){
		this.addQuestionModal.show();
	}
}
