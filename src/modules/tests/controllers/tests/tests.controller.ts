import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreateTestDto} from "../../dto/create-test.dto";
import {TestService} from "../../services/test/test.service";

@Controller('tests')
export class TestsController {
    constructor(private testService: TestService) {
    }

    @Post('CreateTest')
    async createPackage(@Body() createTestDto:CreateTestDto): Promise<any> {
        return this.testService.createTest(createTestDto);
    }

    @Get('GetTests')
    async getAllTests():  Promise <any>{
        return this.testService.getAllTests();
    }

}
