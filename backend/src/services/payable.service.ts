import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService} from "../prisma/prisma.service";
import { PayableDto} from "../DTO/payable.dto";

@Injectable()
export class PayableService {
    constructor(private prisma: PrismaService) {}

    async createPayable(payableDto: PayableDto) {
        return this.prisma.payable.create({
            data: {
                id: payableDto.id,
                value: payableDto.value,
                emissionDate: new Date(payableDto.emissionDate),
                assignor: {
                    connectOrCreate: {
                        where: { id: payableDto.assignor.id },
                        create: payableDto.assignor,
                    },
                },
            },
        });
    }

    async getPayableById(id: string) {
        const payable = await this.prisma.payable.findUnique({ where: { id } });
        if (!payable) {
            throw new NotFoundException('Payable not found');
        }
        return payable;
    }

    async updatePayable(id: string, payableDto: PayableDto) {
        return this.prisma.payable.update({
            where: { id },
            data: {
                value: payableDto.value,
                emissionDate: new Date(payableDto.emissionDate),
                assignor: {
                    connectOrCreate: {
                        where: { id: payableDto.assignor.id },
                        create: payableDto.assignor,
                    },
                },
            },
        });
    }

    async deletePayable(id: string) {
        return this.prisma.payable.delete({ where: { id } });
    }
}
