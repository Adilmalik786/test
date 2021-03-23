import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { MultipleChoiceQuestions } from '../../tests/interfaces/MultipleChoiceQuestions';
import {SimpleQuestion} from '../../tests/interfaces/SimpleQuestions';

export type TestDocument = Test & Document;

@Schema()
export class Test {
  @Prop()
  name: string;

  @Prop()
  Description: string;

  @Prop()
  date: string;

  @Prop()
   SimpleQuestions: Array<SimpleQuestion>;

   @Prop()
    MultipleChoiceQuestions: Array<MultipleChoiceQuestions>;

}

export const TestSchema = SchemaFactory.createForClass(Test);
