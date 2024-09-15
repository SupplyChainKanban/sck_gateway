import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, Query } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';
import { PaginationDto } from 'src/common';
import { SCK_NATS_SERVICE } from 'src/config';
import { CreateDataSourceDto, CreateRawDataDto, UpdateDataSourceDto, UpdateRawDataDto } from './dto';

@Controller('sck-data-ingestion')
export class SckDataIngestionController {
  constructor(
    @Inject(SCK_NATS_SERVICE) private readonly client: ClientProxy,
  ) { }

  @Post('data-source')
  createDataSource(@Body() createDataSourceDto: CreateDataSourceDto) {
    return this.client.send({ cmd: 'createDataSource' }, createDataSourceDto)
      .pipe(
        catchError(err => { throw new RpcException(err) })
      );
  }

  @Post('raw-data')
  createRawData(@Body() createRawDataDto: CreateRawDataDto) {
    return this.client.send({ cmd: 'createRawData' }, createRawDataDto)
      .pipe(
        catchError(err => { throw new RpcException(err) })
      )
  }

  @Get('data-source')
  findAllDataSources(@Query() paginationDto: PaginationDto) {
    return this.client.send({ cmd: 'findAllDataSources' }, paginationDto)
  }

  @Get('raw-data')
  findAllRawData(@Query() paginationDto: PaginationDto) {
    return this.client.send({ cmd: 'findAllRawData' }, paginationDto)
  }

  @Get('data-source/:id')
  async findOneDataSource(@Param('id', ParseUUIDPipe) id: string) {
    return this.client.send({ cmd: 'findOneDataSource' }, { id })
      .pipe(
        catchError(err => { throw new RpcException(err) })
      );
    // try {
    //   const dataSource = await firstValueFrom(
    //     this.sckDataIngestionClient.send({ cmd: 'findOneDataSource' }, { id })
    //   )

    //   return dataSource;
    // } catch (error) {
    //   throw new RpcException(error)
    // }
  }

  @Get('raw-data/:id')
  async findOneRawData(@Param('id', ParseIntPipe) id: number) {
    return this.client.send({ cmd: 'findOneRawData' }, { id })
      .pipe(
        catchError(err => { throw new RpcException(err) })
      );
    // try {
    //   const rawData = await firstValueFrom(
    //     this.sckDataIngestionClient.send({ cmd: 'findOneRawData' }, { id })
    //   )

    //   return rawData;
    // } catch (error) {
    //   throw new BadRequestException(error)
    // }
  }

  @Delete('data-source/:id')
  deleteDataSource(@Param('id') id: string) {
    return this.client.send({ cmd: 'deleteDataSource' }, { id })
      .pipe(
        catchError(err => { throw new RpcException(err) })
      )
  }

  @Delete('raw-data/:id')
  deleteRawData(@Param('id') id: string) {
    return this.client.send({ cmd: 'deleteRawData' }, { id })
      .pipe(
        catchError(err => { throw new RpcException(err) })
      )
  }

  @Patch('data-source/:id')
  updateDataSource(@Param('id', ParseUUIDPipe) id: string, @Body() updateDataSourceDto: UpdateDataSourceDto) {
    return this.client.send({ cmd: 'updateDataSource' }, {
      id,
      ...updateDataSourceDto,
    }).pipe(
      catchError(err => { throw new RpcException(err) })
    )
  }

  @Patch('raw-data/:id')
  updateRawData(@Param('id', ParseIntPipe) id: number, @Body() updateRawDataDto: UpdateRawDataDto) {
    return this.client.send({ cmd: 'updateRawData' }, {
      id,
      ...updateRawDataDto,
    }).pipe(
      catchError(err => { throw new RpcException(err) })
    )
  }

}
