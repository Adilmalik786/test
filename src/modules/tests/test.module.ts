import { Module } from '@nestjs/common';
import {TestsController} from "./controllers/tests/tests.controller";
import {TestService} from "./services/test/test.service";
import { Test, TestSchema } from '../database/schemas/test.schema';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forFeature([{ name: Test.name, schema: TestSchema }])],
    controllers: [TestsController],
    providers: [TestService]
})
export class TestsModule {
}
