import { Module } from '@nestjs/common';
import { SckDataValidationController } from './sck_data_validation.controller';
import { TransportsModule } from 'src/transports/transports.module';

@Module({
  controllers: [SckDataValidationController],
  providers: [],
  imports: [
    TransportsModule
  ],
})
export class SckDataValidationModule { }
