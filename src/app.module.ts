import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TestsModule} from './modules/tests/test.module'
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [ TestsModule,
    MongooseModule.forRoot('mongodb+srv://adil:testproject@cluster0.ra6y1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {

}
