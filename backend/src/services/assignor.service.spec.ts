import { Test, TestingModule } from '@nestjs/testing';
import { AssignorService} from "./assignor.service";
import { PrismaService } from '../prisma/prisma.service';
import { AssignorDto} from "../DTO/assignor.dto";

describe('AssignorService', () => {
    let service: AssignorService;
    let prismaService: PrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AssignorService, PrismaService],
        }).compile();

        service = module.get<AssignorService>(AssignorService);
        prismaService = module.get<PrismaService>(PrismaService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should create an assignor', async () => {
        const assignorDto: AssignorDto = {
            id: 'c56a4180-65aa-42ec-a945-5fd21dec0538',
            document: '12345678901',
            email: 'test@example.com',
            phone: '1234567890',
            name: 'John Doe',
        };
        // @ts-ignore
        jest.spyOn(prismaService.assignor, 'create').mockImplementation(async () => assignorDto);

        expect(await service.createAssignor(assignorDto)).toBe(assignorDto);
    });
});
