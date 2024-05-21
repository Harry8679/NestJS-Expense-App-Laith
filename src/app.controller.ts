import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('report/income')
  getAllIncomeReports() {
    return [];
  }
}
