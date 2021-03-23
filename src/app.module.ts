import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TestsModule} from './modules/tests/test.module'


@Module({
    imports: [ TestsModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {

}
