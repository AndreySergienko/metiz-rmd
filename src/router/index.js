import { createRouter, createWebHistory } from 'vue-router'
import auth from '@/router/auth/auth'
import panel from './panel/panel'
import LayoutStorage from '@/modules/layouts/layoutStorage'
import { pinRouteLayout } from '@/utils/helper.function'
import {
  fetchAuthDataMiddleware,
  accessGuardMiddleware
} from 'auth-analytic-vue'
import { routesNameList } from '@/router/routesNameList'
import { queryMiddleware } from '@/router/middleware/query.middleware'

const routes = [
  {
    path: '/',
    redirect: {
      name: routesNameList.REGISTRY,
      params: { slug: 'default', id: 1 }
    }
  },
  {
    path: '/:notFound(.*)',
    redirect: { name: routesNameList.AUTH }
  }
]

routes.push(...pinRouteLayout(auth, LayoutStorage.AUTH))
routes.push(...pinRouteLayout(panel, LayoutStorage.DEFAULT))

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(fetchAuthDataMiddleware)
router.beforeEach(accessGuardMiddleware({ name: routesNameList.AUTH }))
router.beforeEach(queryMiddleware)

export default router
