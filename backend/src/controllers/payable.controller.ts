import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import {PayableDto} from "../DTO/payable.dto";
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';

@Controller('integrations')
export class PayableController {
    @Post('payable')
    async createPayable(@Body() body: any) {
        const payableDto = plainToInstance(PayableDto, body);
        const errors = await validate(payableDto);

        if (errors.length > 0) {
            const validationErrors = errors.map(err => ({
                field: err.property,
                errors: Object.values(err.constraints || {}),
            }));
            throw new BadRequestException({ message: 'Validation failed', errors: validationErrors });
        }

        return payableDto;
    }
}