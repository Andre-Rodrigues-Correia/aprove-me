import { Test, TestingModule } from '@nestjs/testing';
import { PayableService} from "./payable.service";
import { PrismaService } from '../prisma/prisma.service';
import { PayableDto} from "../DTO/payable.dto";
import { AssignorDto} from "../DTO/assignor.dto";

describe('PayableService', () => {
    let service: PayableService;
    let prismaService: PrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [PayableService, PrismaService],
        }).compile();

        service = module.get<PayableService>(PayableService);
        prismaService = module.get<PrismaService>(PrismaService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
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
        jest.spyOn(prismaService.payable, 'create').mockImplementation(async () => payableDto);

        expect(await service.createPayable(payableDto)).toBe(payableDto);
    });

});
