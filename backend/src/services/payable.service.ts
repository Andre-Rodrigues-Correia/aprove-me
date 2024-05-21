import {PayableDto} from "../DTO/payable.dto";
import {Injectable} from "@nestjs/common";

@Injectable()
export class PayableService {
    createPayable(payableDto: PayableDto) {
        return payableDto;
    }
}