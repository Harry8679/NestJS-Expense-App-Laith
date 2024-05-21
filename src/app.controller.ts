import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('report/income')
export class AppController {
  @Get()
  getAllIncomeReports() {
    return [];
  }

  @Get(':id')
  getIncomeReportById() {
    return {};
  }

  @Post()
  createReport() {
    return 'Created Report';
  }

  @Put(':id')
  updateReport() {
    return 'Updated Report';
  }

  @Delete(':id')
  deleteReport() {
    return 'Deleted Report';
  }
}
