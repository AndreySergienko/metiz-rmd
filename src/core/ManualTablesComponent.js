import AppTablesComponent from '@/core/AppTablesComponent'

export class ManualTablesComponent extends AppTablesComponent {
  constructor() {
    super()
    this.dateRowHeaders = [
      {
        title: 'Дата',
        key: 'created_at',
        align: 'start'
      }
    ]
  }
}
