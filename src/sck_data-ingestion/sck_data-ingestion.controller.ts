import { BadRequestException, Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError, firstValueFrom } from 'rxjs';
import { PaginationDto } from 'src/common';
import { SCK_DATA_INGESTION_MS } from 'src/config';

@Controller('sck-data-ingestion')
export class SckDataIngestionController {
  constructor(
    @Inject(SCK_DATA_INGESTION_MS) private readonly sckDataIngestionClient: ClientProxy,
  ) { }

  @Post('data-source')
  createDataSource() {
    return 'Crear un Data Source'
  }

  @Get('data-source')
  findAllDataSources(@Query() paginationDto: PaginationDto) {
    return this.sckDataIngestionClient.send({ cmd: 'findAllDataSources' }, paginationDto)
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

  @Delete('data-source/:id')
  deleteDataSource(@Param('id') id: string) {
    return 'Esta función elimina el data source ' + id;
  }

  @Patch('data-source/:id')
  updateDataSource(@Param('id') id: string, @Body() body: any) {
    return 'Esta función actualiza el data source ' + id;
  }



  @Post('raw-data')
  createRawData() {
    return 'Crear un Raw Data'
  }

  @Get('raw-data')
  findAllRawData(@Query() paginationDto: PaginationDto) {
    return this.sckDataIngestionClient.send({ cmd: 'findAllRawData' }, paginationDto)
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

  @Delete('raw-data/:id')
  deleteRawData(@Param('id') id: string) {
    return 'Esta función elimina el raw data ' + id;
  }

  @Patch('raw-data/:id')
  updateRawData(@Param('id') id: string, @Body() body: any) {
    return 'Esta función actualiza el raw data ' + id;
  }

}
