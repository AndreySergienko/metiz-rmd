import { accessScopes } from '@/modules/auth/access.scopes'
import registry from '@/core/registry'
import { routesNameList } from '@/router/routesNameList'

export default [
  {
    path: '/registry/:slug',
    name: routesNameList.REGISTRY,
    component: () =>
      import(/* webpackChunkName: "RegistryView" */ '@/views/RegistryView'),
    props: (route) => ({ registry: registry[route.params.slug] }),
    meta: {
      accessScopes: [accessScopes.INDEX]
    }
  },
  {
    path: '/video/:id(\\d+)',
    name: routesNameList.DETAIL_EVENT,
    component: () =>
      import(/* webpackChunkName: "DetailCamera" */ '@/views/DetailCamera'),
    meta: {
      accessScopes: [accessScopes.SHOW]
    }
  },
  {
    path: '/:slug',
    name: routesNameList.MANUAL,
    component: () =>
      import(/* webpackChunkName: "RegistryView" */ '@/views/RegistryView'),
    props: (route) => {
      return {
        registry: route ? registry.manual.children[route.name] : registry.manual
      }
    },
    meta: {
      accessScopes: [
        accessScopes.ZONE_INDEX,
        accessScopes.USER_INDEX,
        accessScopes.CAMERA_INDEX
      ]
    },
    redirect: () => {
      return { name: routesNameList.USERS }
    },
    children: [
      {
        path: 'users',
        name: routesNameList.USERS,
        meta: {
          accessScopes: [accessScopes.USER_INDEX],
          componentName: 'ModalUser'
        },
        component: () =>
          import(
            /* webpackChunkName: "ModalUser" */ '@/components/ui/modal/manuals/ModalUser'
          )
      },
      {
        path: 'zones',
        name: routesNameList.ZONES,
        meta: {
          accessScopes: [accessScopes.ZONE_INDEX],
          componentName: 'ModalZone'
        },
        component: () =>
          import(
            /* webpackChunkName: "ModalZone" */ '@/components/ui/modal/manuals/ModalZone'
          )
      },
      {
        path: 'cameras',
        name: routesNameList.CAMERAS,
        meta: {
          accessScopes: [accessScopes.CAMERA_INDEX],
          componentName: 'ModalCamera'
        },
        component: () =>
          import(
            /* webpackChunkName: "ModalCamera" */ '@/components/ui/modal/manuals/ModalCamera'
          )
      }
    ]
  }
]
