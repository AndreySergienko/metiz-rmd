import { ManualTablesComponent } from '@/core/ManualTablesComponent'

export class TableCameras extends ManualTablesComponent {
  constructor() {
    super()
    this.headers = [
      ...this.dateRowHeaders,
      {
        title: '№ камеры',
        key: 'number',
        align: 'start',
        sortable: false
      },
      {
        title: 'Название камеры',
        key: 'title',
        align: 'start'
      },
      {
        title: 'Зоны',
        key: 'zone_title',
        align: 'start'
      },
      {
        title: 'Распознавание СИЗ',
        key: 'is_recognition',
        align: 'start'
      },
      ...this.defaultBtnsActionHeaders
    ]
  }

  transform(list) {
    return list.map((item) => {
      item.zone_title = item.zone?.title
      item.fullname = `${item?.firstname} ${item.lastname}`
      if (Reflect.has(item, 'name')) {
        delete item.name
      }
      return item
    })
  }
}
