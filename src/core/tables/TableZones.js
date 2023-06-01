import { ManualTablesComponent } from '@/core/ManualTablesComponent'

export class TableZones extends ManualTablesComponent {
  constructor() {
    super()
    this.headers = [
      ...this.dateRowHeaders,
      {
        title: 'Название',
        key: 'title',
        align: 'start'
      },
      ...this.defaultBtnsActionHeaders
    ]
  }

  transform(list) {
    return list.map((item) => {
      if (Reflect.has(item, 'name')) {
        delete item.name
      }

      return item
    })
  }
}
