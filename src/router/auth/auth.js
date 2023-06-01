import { routesNameList } from '@/router/routesNameList'
import { useUserStore } from '@/store/user/useUserStore'

export default [
  {
    path: '/auth',
    name: routesNameList.AUTH,
    component: () => import('@/views/AuthView'),
    beforeEnter(to, from, next) {
      const user = useUserStore()
      if (user.personal.login) {
        next({ name: routesNameList.REGISTRY })
      } else {
        next()
      }
    }
  }
]
