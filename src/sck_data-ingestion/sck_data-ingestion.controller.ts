import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';
import { PaginationDto } from 'src/common';
import { SCK_DATA_INGESTION_MS } from 'src/config';
import { CreateDataSourceDto, CreateRawDataDto, UpdateDataSourceDto, UpdateRawDataDto } from './dto';

@Controller('sck-data-ingestion')
export class SckDataIngestionController {
  constructor(
    @Inject(SCK_DATA_INGESTION_MS) private readonly sckDataIngestionClient: ClientProxy,
  ) { }

  @Post('data-source')
  createDataSource(@Body() createDataSourceDto: CreateDataSourceDto) {
    return this.sckDataIngestionClient.send({ cmd: 'createDataSource' }, createDataSourceDto)
      .pipe(
        catchError(err => { throw new RpcException(err) })
      );
  }

  @Post('raw-data')
  createRawData(@Body() createRawDataDto: CreateRawDataDto) {
    return this.sckDataIngestionClient.send({ cmd: 'createRawData' }, createRawDataDto)
      .pipe(
        catchError(err => { throw new RpcException(err) })
      )
  }

  @Get('data-source')
  findAllDataSources(@Query() paginationDto: PaginationDto) {
    return this.sckDataIngestionClient.send({ cmd: 'findAllDataSources' }, paginationDto)
  }

  @Get('raw-data')
  findAllRawData(@Query() paginationDto: PaginationDto) {
    return this.sckDataIngestionClient.send({ cmd: 'findAllRawData' }, paginationDto)
  }

  @Get('data-source/:id')
  async findOneDataSource(@Param('id', ParseIntPipe) id: number) {
    return this.sckDataIngestionClient.send({ cmd: 'findOneDataSource' }, { id })
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
    return this.sckDataIngestionClient.send({ cmd: 'findOneRawData' }, { id })
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
    return this.sckDataIngestionClient.send({ cmd: 'deleteDataSource' }, { id })
      .pipe(
        catchError(err => { throw new RpcException(err) })
      )
  }

  @Delete('raw-data/:id')
  deleteRawData(@Param('id') id: string) {
    return this.sckDataIngestionClient.send({ cmd: 'deleteRawData' }, { id })
      .pipe(
        catchError(err => { throw new RpcException(err) })
      )
  }

  @Patch('data-source/:id')
  updateDataSource(@Param('id', ParseIntPipe) id: number, @Body() updateDataSourceDto: UpdateDataSourceDto) {
    return this.sckDataIngestionClient.send({ cmd: 'updateDataSource' }, {
      id,
      ...updateDataSourceDto,
    }).pipe(
      catchError(err => { throw new RpcException(err) })
    )
  }

  @Patch('raw-data/:id')
  updateRawData(@Param('id', ParseIntPipe) id: number, @Body() updateRawDataDto: UpdateRawDataDto) {
    return this.sckDataIngestionClient.send({ cmd: 'updateRawData' }, {
      id,
      ...updateRawDataDto,
    }).pipe(
      catchError(err => { throw new RpcException(err) })
    )
  }

}
