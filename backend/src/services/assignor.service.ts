import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService} from "../prisma/prisma.service";
import { AssignorDto} from "../DTO/assignor.dto";

@Injectable()
export class AssignorService {
    constructor(private prisma: PrismaService) {}

    async createAssignor(assignorDto: AssignorDto) {
        return this.prisma.assignor.create({
            data: {
                id: assignorDto.id,
                document: assignorDto.document,
                email: assignorDto.email,
                phone: assignorDto.phone,
                name: assignorDto.name,
            },
        });
    }

    async getAssignorById(id: string) {
        const assignor = await this.prisma.assignor.findUnique({ where: { id } });
        if (!assignor) {
            throw new NotFoundException('Assignor not found');
        }
        return assignor;
    }

    async updateAssignor(id: string, assignorDto: AssignorDto) {
        return this.prisma.assignor.update({
            where: { id },
            data: {
                document: assignorDto.document,
                email: assignorDto.email,
                phone: assignorDto.phone,
                name: assignorDto.name,
            },
        });
    }

    async deleteAssignor(id: string) {
        return this.prisma.assignor.delete({ where: { id } });
    }
}
