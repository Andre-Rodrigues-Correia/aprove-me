import { IsUUID, IsNotEmpty, IsDateString, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { AssignorDto } from './assignor.dto';

export class PayableDto {
    @IsUUID()
    @IsNotEmpty()
    id: string;

    @IsNumber()
    @IsNotEmpty()
    value: number;

    @IsDateString()
    @IsNotEmpty()
    emissionDate: string;

    @ValidateNested()
    @Type(() => AssignorDto)
    @IsNotEmpty()
    assignor: AssignorDto;
}
