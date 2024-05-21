import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PayableService } from '../services/payable.service';
import { PayableDto} from "../DTO/payable.dto";

@Controller('payable')
export class PayableController {
    constructor(private readonly payableService: PayableService) {}

    @Post()
    async createPayable(@Body() payableDto: PayableDto) {
        return this.payableService.createPayable(payableDto);
    }

    @Get(':id')
    async getPayable(@Param('id') id: string) {
        return this.payableService.getPayableById(id);
    }

    @Put(':id')
    async updatePayable(@Param('id') id: string, @Body() payableDto: PayableDto) {
        return this.payableService.updatePayable(id, payableDto);
    }

    @Delete(':id')
    async deletePayable(@Param('id') id: string) {
        return this.payableService.deletePayable(id);
    }
}
