import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {CreateTestDto} from "../../dto/create-test.dto";
import {TestService} from "../../services/test/test.service";

@Controller('tests')
export class TestsController {
    constructor(private testService: TestService) {
    }

    @Post('CreateTest')
    async createPackage(@Body() createTestDto:CreateTestDto): Promise<any> {
        console.log('===============:', createTestDto);
        return this.testService.createTest(createTestDto);
    }

    @Get()
    async getAllTests():  Promise <any>{
        return this.testService.getAllTests();
    }

    // @Get(':id')
    // async getPackageDetails(@Param() param): Promise<any>{
    //     return {id: 'aaaa'}
    //     return this.packageService.getPackageDetails(param.id);
    // }

  


}
