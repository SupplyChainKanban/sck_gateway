import { Body, Controller, Delete, Get, Inject, Param, Patch, Post, Query } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
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
  findOneDataSource(@Param('id') id: string) {
    return 'Esta función regresa el data source ' + id;
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
  findOneRawData(@Param('id') id: string) {
    return 'Esta función regresa el raw data ' + id;
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
