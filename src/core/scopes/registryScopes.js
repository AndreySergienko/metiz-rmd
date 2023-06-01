import { accessScopes } from '@/modules/auth/access.scopes'

export default {
  defaultScope: [accessScopes.INDEX],
  journalScope: [accessScopes.ACTIVITY_INDEX],
  manualScope: [
    accessScopes.CAMERA_INDEX,
    accessScopes.ZONE_INDEX,
    accessScopes.USER_INDEX
  ]
}
