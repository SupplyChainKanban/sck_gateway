import { Controller, Post, Body, Inject } from '@nestjs/common';
import { SCK_DATA_VALIDATION_MS } from 'src/config';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';
import { CreateValidationRuleDto } from './dto';
import { ValidateDataDto } from './dto/validate_data.dto';

@Controller('sck-data-validation')
export class SckDataValidationController {
  constructor(
    @Inject(SCK_DATA_VALIDATION_MS) private readonly sckDataValidationClient: ClientProxy,
  ) { }

  @Post('rule')
  create(@Body() createValidationRuleDto: CreateValidationRuleDto) {
    return this.sckDataValidationClient.send('createValidationRule', createValidationRuleDto)
      .pipe(
        catchError(err => { throw new RpcException(err) })
      )
  }

  @Post('validate')
  validate(@Body() validateDataDto: ValidateDataDto) {
    return this.sckDataValidationClient.send('validate', validateDataDto)
      .pipe(
        catchError(err => { throw new RpcException(err) })
      )
  }

}
