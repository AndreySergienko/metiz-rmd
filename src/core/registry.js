import registryScopes from '@/core/scopes/registryScopes'
import { TableDefault } from '@/core/tables/TableDefault'
import { TableChecked } from '@/core/tables/TableChecked'
import { TableReports } from '@/core/tables/TableReports'
import { TableJournal } from '@/core/tables/TableJournal'
import { routesNameList } from '@/router/routesNameList'
import { TableUsers } from '@/core/tables/TableUsers'
import { TableZones } from '@/core/tables/TableZones'
import { TableCameras } from '@/core/tables/TableCameras'

const manualConfig = () => {
  return {
    name: 'Справочники',
    scopes: registryScopes.manualScope,
    isSearch: true,
    isComponent: true
  }
}

const itemRoute = (slug = null, name) => {
  const route = {
    name: name || routesNameList.REGISTRY
  }

  if (slug) {
    route.params = {
      slug
    }
  }
  return route
}

export default {
  default: {
    name: 'Общий реестр',
    menu: {
      icon: 'Home'
    },
    route: itemRoute('default'),
    scopes: registryScopes.defaultScope,
    isFilter: true,
    isChecked: true,
    isShowCamera: true,
    isButtonReport: true,
    table: new TableDefault()
  },
  checked: {
    name: 'Реестр обработанных нарушений',
    route: itemRoute('checked'),
    menu: {
      icon: 'RepositoryErrorChecked'
    },
    scopes: registryScopes.defaultScope,
    isFilter: true,
    isButtonReport: true,
    table: new TableChecked(),
    beforeEnter(filter) {
      filter.updateFilterByKey('Processed', 1)
    }
  },
  error: {
    name: 'Реестр необработанных нарушений',
    route: itemRoute('error'),
    menu: {
      icon: 'RepositoryError'
    },
    scopes: registryScopes.defaultScope,
    isFilter: true,
    isButtonReport: true,
    table: new TableChecked(),
    beforeEnter(filter) {
      filter.updateFilterByKey('Processed', 0)
    }
  },
  video: {
    name: 'Реестр видеозаписей',
    route: itemRoute('video'),
    menu: {
      icon: 'RepositoryVideo'
    },
    scopes: registryScopes.defaultScope,
    isFilter: true,
    isChecked: true,
    isButtonReport: true,
    table: new TableDefault(),
    beforeEnter(filter) {
      filter.updateFilterByKey('HasVideo', 1)
    }
  },
  manual: {
    route: itemRoute('manual', routesNameList.USERS),
    menu: {
      icon: 'Manual'
    },
    ...manualConfig(),
    children: {
      route: itemRoute(null, routesNameList.USERS),
      [routesNameList.USERS]: {
        ...manualConfig(),
        table: new TableUsers(),
        url: '/users',
        componentName: 'ModalUser'
      },
      [routesNameList.ZONES]: {
        route: itemRoute(null, routesNameList.ZONES),
        ...manualConfig(),
        table: new TableZones(),
        url: '/zones',
        componentName: 'ModalZone'
      },
      [routesNameList.CAMERAS]: {
        route: itemRoute(null, routesNameList.CAMERAS),
        ...manualConfig(),
        table: new TableCameras(),
        url: '/cameras',
        componentName: 'ModalCamera'
      }
    }
  },
  journal: {
    name: 'Журнал',
    route: itemRoute('journal'),
    menu: {
      icon: 'Journal'
    },
    scopes: registryScopes.journalScope,
    isSearch: true,
    table: new TableJournal(),
    url: '/activities'
  },
  reports: {
    name: 'Отчёты',
    route: itemRoute('reports'),
    menu: {
      icon: 'Report'
    },
    scopes: registryScopes.defaultScope,
    isFilter: true,
    isReports: true,
    isButtonReport: true,
    table: new TableReports(),
    url: '/reports'
  }
}
