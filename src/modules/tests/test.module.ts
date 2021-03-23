import { Module } from '@nestjs/common';
import {TestsController} from "./controllers/tests/tests.controller";
import {TestService} from "./services/test/test.service";


@Module({
    controllers: [TestsController],
    providers: [TestService]
})
export class TestsModule {
}
