import { Module } from '@nestjs/common';
import { SckAuthorizationController } from './sck_authorization.controller';
import { TransportsModule } from 'src/transports/transports.module';

@Module({
  controllers: [SckAuthorizationController],
  providers: [],
  imports: [
    TransportsModule,
  ],
})
export class SckAuthorizationModule { }
