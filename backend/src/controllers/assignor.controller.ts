import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AssignorService } from '../services/assignor.service';
import { AssignorDto} from "../DTO/assignor.dto";

@Controller('assignor')
export class AssignorController {
    constructor(private readonly assignorService: AssignorService) {}

    @Post()
    async createAssignor(@Body() assignorDto: AssignorDto) {
        return this.assignorService.createAssignor(assignorDto);
    }

    @Get(':id')
    async getAssignor(@Param('id') id: string) {
        return this.assignorService.getAssignorById(id);
    }

    @Put(':id')
    async updateAssignor(@Param('id') id: string, @Body() assignorDto: AssignorDto) {
        return this.assignorService.updateAssignor(id, assignorDto);
    }

    @Delete(':id')
    async deleteAssignor(@Param('id') id: string) {
        return this.assignorService.deleteAssignor(id);
    }
}
