import { Test, TestingModule } from '@nestjs/testing';
import { PayableController} from "./payable.controller";
import { PayableService} from "../services/payable.service";
import { PrismaService } from '../prisma/prisma.service';
import { PayableDto} from "../DTO/payable.dto";
import { AssignorDto} from "../DTO/assignor.dto";

describe('PayableController', () => {
    let controller: PayableController;
    let service: PayableService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [PayableController],
            providers: [PayableService, PrismaService],
        }).compile();

        controller = module.get<PayableController>(PayableController);
        service = module.get<PayableService>(PayableService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it('should create a payable', async () => {
        const payableDto: PayableDto = {
            id: 'd56a4180-65aa-42ec-a945-5fd21dec0538',
            value: 100.0,
            emissionDate: '2023-05-21',
            assignor: {
                id: 'c56a4180-65aa-42ec-a945-5fd21dec0538',
                document: '12345678901',
                email: 'test@example.com',
                phone: '1234567890',
                name: 'John Doe',
            } as AssignorDto,
        };
        // @ts-ignore
        jest.spyOn(service, 'createPayable').mockImplementation(async () => payableDto);

        expect(await controller.createPayable(payableDto)).toBe(payableDto);
    });

    it('should get a payable by id', async () => {
        const payableDto: PayableDto = {
            id: 'd56a4180-65aa-42ec-a945-5fd21dec0538',
            value: 100.0,
            emissionDate: '2023-05-21',
            assignor: {
                id: 'c56a4180-65aa-42ec-a945-5fd21dec0538',
                document: '12345678901',
                email: 'test@example.com',
                phone: '1234567890',
                name: 'John Doe',
            } as AssignorDto,
        };
        // @ts-ignore
        jest.spyOn(service, 'getPayableById').mockImplementation(async () => payableDto);

        expect(await controller.getPayable('d56a4180-65aa-42ec-a945-5fd21dec0538')).toBe(payableDto);
    });

    it('should update a payable', async () => {
        const payableDto: PayableDto = {
            id: 'd56a4180-65aa-42ec-a945-5fd21dec0538',
            value: 100.0,
            emissionDate: '2023-05-21',
            assignor: {
                id: 'c56a4180-65aa-42ec-a945-5fd21dec0538',
                document: '12345678901',
                email: 'test@example.com',
                phone: '1234567890',
                name: 'John Doe',
            } as AssignorDto,
        };
        // @ts-ignore
        jest.spyOn(service, 'updatePayable').mockImplementation(async () => payableDto);

        expect(await controller.updatePayable('d56a4180-65aa-42ec-a945-5fd21dec0538', payableDto)).toBe(payableDto);
    });

    it('should delete a payable', async () => {
        const payableDto: PayableDto = {
            id: 'd56a4180-65aa-42ec-a945-5fd21dec0538',
            value: 100.0,
            emissionDate: '2023-05-21',
            assignor: {
                id: 'c56a4180-65aa-42ec-a945-5fd21dec0538',
                document: '12345678901',
                email: 'test@example.com',
                phone: '1234567890',
                name: 'John Doe',
            } as AssignorDto,
        };
        // @ts-ignore
        jest.spyOn(service, 'deletePayable').mockImplementation(async () => payableDto);

        expect(await controller.deletePayable('d56a4180-65aa-42ec-a945-5fd21dec0538')).toEqual(payableDto);
    });
});
