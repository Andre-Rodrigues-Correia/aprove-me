import { Module } from '@nestjs/common';
import { PayableService} from "./services/payable.service";
import { AssignorService} from "./services/assignor.service";
import { PrismaService } from './prisma/prisma.service';
import {AssignorController} from "./controllers/assignor.controller";
import {PayableController} from "./controllers/payable.controller";

@Module({
  imports: [],
  controllers: [AssignorController, PayableController],
  providers: [PayableService, AssignorService, PrismaService],
})
export class AppModule {}
