import AppTablesComponent from '@/core/AppTablesComponent'

export class TableChecked extends AppTablesComponent {
  constructor() {
    super()
    this.headers = [
      ...this.defaultHeaders,
      {
        title: 'Статус',
        key: 'approved',
        align: 'start',
        width: 100
      },
      ...this.defaultBtnsHeaders
    ]
  }
}
