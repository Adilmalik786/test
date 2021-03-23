import {Injectable} from '@nestjs/common';
import {CreateTestDto} from "../../dto/create-test.dto";

@Injectable()
export class TestService {

    createTest(createPackageDto: CreateTestDto) {
        console.log('Package is created : ', createPackageDto);
        return createPackageDto;
    }

    getAllTests() {
        console.log('All Packages are returned!');
    }

    getPackageDetails(id: any) {
        console.log(`Package details are returned of ID ${id}`);
    }


}
