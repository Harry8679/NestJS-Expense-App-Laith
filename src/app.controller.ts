import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
// import { ReportType } from 'sr/data';
import { data, ReportType } from './data';

@Controller('report/:type')
export class AppController {
  @Get()
  getAllIncomeReports(@Param('type') type: string) {
    // console.log(type);
    // eslint-disable-next-line prettier/prettier
    const reportType = 
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report.filter((report) => report.type === reportType);
  }

  @Get(':id')
  getReportById(@Param('type') type: string, @Param('id') id: string) {
    // console.log({ type, id });
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report
      .filter((report) => report.type === reportType)
      .find((report) => report.id === id);
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
