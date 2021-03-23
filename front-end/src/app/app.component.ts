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
 
	submitTest() {
		this.rightAnswer = 0;
		this.totalAnswered = 0;
		
		this.submitModal.show();

	}

	startQuiz() {
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
		
		this.questionForm.reset();
		this.addQuestionModal.hide();

	}
	checkAnswers(){
		this.submitModal.hide();
		this.answerModal.show();
	}

	async ngOnInit() {
		this.allTests = await this.testService.getTestsRecords();
	}
	createTest(){
		this.addQuestionModal.show();
	}
}
