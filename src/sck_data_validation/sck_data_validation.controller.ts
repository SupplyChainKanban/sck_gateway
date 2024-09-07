import { Controller, Post, Body, Inject } from '@nestjs/common';
import { CreateSckDataValidationDto } from './dto/create-sck_data_validation.dto';
import { SCK_DATA_VALIDATION_MS } from 'src/config';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';
import { ValidateDataDto } from './dto/validate_data.dto';

@Controller('sck-data-validation')
export class SckDataValidationController {
  constructor(
    @Inject(SCK_DATA_VALIDATION_MS) private readonly sckDataValidationClient: ClientProxy,
  ) { }

  @Post('rule')
  create(@Body() createSckDataValidationDto: CreateSckDataValidationDto) {
    return this.sckDataValidationClient.send('createValidationRule', createSckDataValidationDto)
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
