import {Injectable} from '@nestjs/common';
import {CreateTestDto} from "../../dto/create-test.dto";
import {Test, TestDocument} from "../../../database/schemas/test.schema";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TestService {
    constructor(@InjectModel(Test.name) private testModel: Model<TestDocument>) {}

    async createTest(createTestDto: CreateTestDto) {
        console.log('--------------------:', createTestDto);
       return this.testModel.create(createTestDto);
    
    }

    getAllTests() {
        console.log('All Packages are returned!');
    }

    getPackageDetails(id: any) {
        console.log(`Package details are returned of ID ${id}`);
    }


}
