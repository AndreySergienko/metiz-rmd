export default class AppTablesComponent {
  constructor() {
    this.headers = []
    this.defaultHeaders = [
      {
        title: 'ID',
        key: 'id',
        align: 'start'
      },
      {
        title: 'Камера',
        key: 'camera_id',
        align: 'start'
      },
      {
        title: 'Начало нарушения',
        key: 'start_time',
        align: 'start'
      },
      {
        title: 'Окончание нарушения',
        key: 'end_time',
        align: 'start'
      },
      {
        title: 'Индекс вероятности',
        key: 'probability',
        align: 'start',
        width: 80
      }
    ]
    this.defaultBtnsHeaders = [
      {
        title: 'Фото на событие',
        key: 'photo_url',
        align: 'start',
        sortable: false
      },
      {
        title: 'Видео на событие',
        key: 'has_video',
        align: 'start',
        sortable: false
      }
    ]
    this.defaultBtnsActionHeaders = [
      {
        title: 'Действия',
        key: 'actions',
        align: 'start',
        width: 100,
        sortable: false
      }
    ]
  }

  transform(data) {
    return data
  }
}
