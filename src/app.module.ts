import { Module } from '@nestjs/common';
import { PayableController } from "./controllers/payable.controller";
import {PayableService} from "./services/payable.service";


@Module({
  imports: [],
  controllers: [ PayableController ],
  providers: [ PayableService],
})
export class AppModule {}
