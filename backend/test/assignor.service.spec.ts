import { Test, TestingModule } from '@nestjs/testing';
import { AssignorService} from "../src/services/assignor.service";
import {PrismaService} from "../src/prisma/prisma.service";

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
});
