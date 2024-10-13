import { Controller, Post, Body, Inject } from '@nestjs/common';
import { SCK_NATS_SERVICE } from 'src/config';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';
import { CreateValidationRuleDto } from './dto';
import { ValidateDataDto } from './dto/validate-data.dto';

@Controller('sck-data-validation')
export class SckDataValidationController {
  constructor(
    @Inject(SCK_NATS_SERVICE) private readonly client: ClientProxy,
  ) { }

  @Post('rule')
  create(@Body() createValidationRuleDto: CreateValidationRuleDto) {
    return this.client.send('createValidationRule', createValidationRuleDto)
      .pipe(
        catchError(err => { throw new RpcException(err) })
      )
  }

  @Post('validate')
  validate(@Body() validateDataDto: ValidateDataDto) {
    return this.client.send('validate', validateDataDto)
      .pipe(
        catchError(err => { throw new RpcException(err) })
      )
  }

}
