import { Test, TestingModule } from '@nestjs/testing';
import { AssignorController} from "./assignor.controller";
import { AssignorService} from "../services/assignor.service";
import { PrismaService } from '../prisma/prisma.service';
import { AssignorDto} from "../DTO/assignor.dto";

describe('AssignorController', () => {
    let controller: AssignorController;
    let service: AssignorService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AssignorController],
            providers: [AssignorService, PrismaService],
        }).compile();

        controller = module.get<AssignorController>(AssignorController);
        service = module.get<AssignorService>(AssignorService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it('should create an assignor', async () => {
        const assignorDto: AssignorDto = {
            id: 'c56a4180-65aa-42ec-a945-5fd21dec0538',
            document: '12345678901',
            email: 'test@example.com',
            phone: '1234567890',
            name: 'John Doe',
        };
        jest.spyOn(service, 'createAssignor').mockImplementation(async () => assignorDto);

        expect(await controller.createAssignor(assignorDto)).toBe(assignorDto);
    });

    it('should get an assignor by id', async () => {
        const assignorDto: AssignorDto = {
            id: 'c56a4180-65aa-42ec-a945-5fd21dec0538',
            document: '12345678901',
            email: 'test@example.com',
            phone: '1234567890',
            name: 'John Doe',
        };
        jest.spyOn(service, 'getAssignorById').mockImplementation(async () => assignorDto);

        expect(await controller.getAssignor('c56a4180-65aa-42ec-a945-5fd21dec0538')).toBe(assignorDto);
    });

    it('should update an assignor', async () => {
        const assignorDto: AssignorDto = {
            id: 'c56a4180-65aa-42ec-a945-5fd21dec0538',
            document: '12345678901',
            email: 'test@example.com',
            phone: '1234567890',
            name: 'John Doe',
        };
        jest.spyOn(service, 'updateAssignor').mockImplementation(async () => assignorDto);

        expect(await controller.updateAssignor('c56a4180-65aa-42ec-a945-5fd21dec0538', assignorDto)).toBe(assignorDto);
    });

    it('should delete an assignor', async () => {
        const assignorDto: AssignorDto = {
            id: 'c56a4180-65aa-42ec-a945-5fd21dec0538',
            document: '12345678901',
            email: 'test@example.com',
            phone: '1234567890',
            name: 'John Doe',
        };
        jest.spyOn(service, 'deleteAssignor').mockImplementation(async () => assignorDto);

        expect(await controller.deleteAssignor('c56a4180-65aa-42ec-a945-5fd21dec0538')).toEqual(assignorDto);
    });
});
