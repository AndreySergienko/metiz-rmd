import AppTablesComponent from '@/core/AppTablesComponent'

export class TableJournal extends AppTablesComponent {
  constructor() {
    super()
    this.headers = [
      {
        title: '№ п/п',
        key: 'id',
        align: 'start'
      },
      {
        title: 'Дата/Время',
        key: 'created_at',
        align: 'start'
      },
      {
        title: 'Пользователь',
        key: 'fullname',
        align: 'start'
      },
      {
        title: 'Место изменений',
        key: 'subject_id',
        align: 'start'
      },
      {
        title: 'Событие',
        key: 'event',
        align: 'start',
        sortable: false
      },
      {
        title: 'Было',
        key: 'before',
        align: 'start',
        sortable: false
      },
      {
        title: 'Стало',
        key: 'after',
        align: 'start',
        sortable: false
      }
    ]
  }

  transform(data) {
    return data.map((item) => {
      item.fullname = `${item.user?.firstname} ${item.user.lastname}`
      return item
    })
  }
}
