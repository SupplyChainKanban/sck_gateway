import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('sck-data-ingestion')
export class SckDataIngestionController {
  constructor() { }

  @Post('data-source')
  createDataSource() {
    return 'Crear un Data Source'
  }

  @Get('data-source')
  findAllDataSources() {
    return 'Esta función regresa varios Data Sources'
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
  findAllRawData() {
    return 'Esta función regresa varios Raw Data'
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
