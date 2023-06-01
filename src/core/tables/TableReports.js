import AppTablesComponent from '@/core/AppTablesComponent'

export class TableReports extends AppTablesComponent {
  constructor() {
    super()
    this.headers = [
      {
        title: 'Последнее нарушение',
        key: 'end_time',
        align: 'start'
      },
      {
        title: '№ камеры',
        key: 'number',
        align: 'start'
      },
      {
        title: 'Зоны',
        key: 'zone_title',
        align: 'start'
      },
      {
        title: 'Счётчик нарушений',
        key: 'total',
        align: 'start'
      }
    ]
  }

  transform(data) {
    return data.map((item) => {
      item.zone_title = item.camera.zone?.title
      item.number = item.camera.number
      return item
    })
  }
}
