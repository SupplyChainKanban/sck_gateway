import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, Query } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';
import { PaginationDto } from 'src/common';
import { SCK_NATS_SERVICE } from 'src/config';

@Controller('sck-analytics')
export class SckAnalyticsController {
  constructor(
    @Inject(SCK_NATS_SERVICE) private readonly client: ClientProxy,
  ) { }

  @Get('data-analytics')
  findAll(@Query() paginationDto: PaginationDto) {
    return this.client.send('findAllDataAnalytics', paginationDto)
      .pipe(catchError(err => { throw new RpcException(err) }));
  }
}
