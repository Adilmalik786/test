import {SimpleQuestion} from '../interfaces/SimpleQuestions';
import {MultipleChoiceQuestions} from '../interfaces/MultipleChoiceQuestions';

export class CreateTestDto {
    name: string;
    date: Date;
    Description: string;
    SimpleQuestions: Array<SimpleQuestion>;
    MultipleChoiceQuestions: Array<MultipleChoiceQuestions>;
};
