const data: Data = {
  report: [],
};

interface Data {
  report: {
    id: string;
    source: string;
    amount: string;
    created_at: Date;
    updated_at: Date;
    type: ReportType;
  }[];
}

enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

data.report.push({
  id: 'uuid',
  source: 'Salary',
  amount: '7600',
  created_at: new Date(),
  updated_at: new Date(),
  type: ReportType.INCOME,
});
