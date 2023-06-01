import AppTablesComponent from '@/core/AppTablesComponent'

export class TableDefault extends AppTablesComponent {
  constructor() {
    super()
    this.headers = [
      ...this.defaultHeaders,
      {
        title: 'Обработано',
        key: 'processed',
        align: 'start',
        width: 100
      },
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
