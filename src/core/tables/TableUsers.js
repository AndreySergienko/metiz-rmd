import { ManualTablesComponent } from '@/core/ManualTablesComponent'

export class TableUsers extends ManualTablesComponent {
  constructor() {
    super()
    this.headers = [
      ...this.dateRowHeaders,
      {
        title: 'ФИО',
        key: 'fullname',
        align: 'start'
      },
      {
        title: 'Пароль',
        key: 'password',
        align: 'start',
        width: 200,
        sortable: false
      },
      {
        title: 'Логин',
        key: 'login',
        align: 'start'
      },
      {
        title: 'Роль',
        key: 'roles',
        align: 'start',
        width: 100,
        sortable: false
      },
      ...this.defaultBtnsActionHeaders
    ]
  }

  transform(list) {
    return list.map((item) => {
      item.password = item.raw_password
      item.fullname = `${item?.firstname} ${item.lastname}`
      return item
    })
  }
}
