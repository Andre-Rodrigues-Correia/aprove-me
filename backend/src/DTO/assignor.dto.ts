import { IsUUID, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class AssignorDto {
    @IsUUID()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    document: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(140)
    email: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    phone: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(140)
    name: string;
}
