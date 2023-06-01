<template>
  <svg
    :width='width'
    :height='height'
    :viewBox='cViewBox || viewBox'
    :fill='fill'
    xmlns='http://www.w3.org/2000/svg'
  >
    <component :is='currentIconName'></component>
  </svg>
</template>

<script>
  import { computed } from 'vue'
  import IconMenu from './items/IconBurger'
  import IconPersonal from './items/IconPersonal'
  import IconArrow from './items/IconArrow'
  import IconOutDoor from './items/IconOutDoor'
  import IconHome from './items/IconHome'
  import IconVideo from './items/IconVideo'
  import IconRepositoryVideo from './items/IconRepositoryVideo'
  import IconRepositoryError from './items/IconRepositoryError'
  import IconRepositoryErrorChecked from './items/IconRepositoryErrorChecked'
  import IconArrowNext from './items/IconArrowNext'
  import IconArrowBack from './items/IconArrowBack'
  import IconPhoto from './items/IconPhoto'
  import IconVideoPlay from './items/IconVideoPlay'
  import IconSuccess from './items/IconSuccess'
  import IconCancel from './items/IconCancel'
  import IconOpenBigWindow from './items/IconOpenBigWindow'
  import IconCloseGray from './items/IconCloseGray'
  import IconOptions from './items/IconOptions'
  import IconManual from './items/IconManual'
  import IconJournal from './items/IconJournal'
  import IconCamera from './items/MenuJournal/IconCamera'
  import IconUser from './items/MenuJournal/IconUser'
  import IconZona from './items/MenuJournal/IconZona'
  import IconPlus from './items/IconPlus'
  import IconChangeProfile from './items/IconChangeProfile'
  import IconChangeProfileSmall from './items/IconChangeProfileSmall'
  import IconPersonalBig from './items/IconPersonalBig'
  import IconSuccessAlert from './items/alert/IconSuccess'
  import IconErrorAlert from './items/alert/IconError'
  import IconInfoAlert from './items/alert/IconInfo'
  import IconWarnAlert from './items/alert/IconWarn'
  import IconReport from './items/IconReport'
  import IconEye from './items/IconEye'
  import IconCloseEye from './items/IconCloseEye'
  import IconDelete from './items/IconDelete'
  import IconCalendar from './items/IconCalendar'

  export default {
    components: {
      IconCalendar,
      IconChangeProfileSmall,
      IconSuccessAlert,
      IconErrorAlert,
      IconInfoAlert,
      IconWarnAlert,
      IconMenu,
      IconPersonal,
      IconArrow,
      IconOutDoor,
      IconHome,
      IconVideo,
      IconRepositoryVideo,
      IconRepositoryError,
      IconRepositoryErrorChecked,
      IconArrowNext,
      IconArrowBack,
      IconPhoto,
      IconVideoPlay,
      IconSuccess,
      IconCancel,
      IconOpenBigWindow,
      IconCloseGray,
      IconOptions,
      IconUser,
      IconZona,
      IconCamera,
      IconManual,
      IconJournal,
      IconPlus,
      IconChangeProfile,
      IconPersonalBig,
      IconReport,
      IconEye,
      IconCloseEye,
      IconDelete
    },
    props: {
      iconName: {
        type: String,
        required: true,
        validator(value) {
          return [
            'ChangeProfileSmall',
            'Delete',
            'Eye',
            'CloseEye',
            'Report',
            'SuccessAlert',
            'WarnAlert',
            'ErrorAlert',
            'InfoAlert',
            'Menu',
            'Personal',
            'Arrow',
            'OutDoor',
            'Home',
            'Video',
            'RepositoryVideo',
            'RepositoryError',
            'RepositoryErrorChecked',
            'ArrowNext',
            'ArrowBack',
            'Photo',
            'VideoPlay',
            'Success',
            'Cancel',
            'OpenBigWindow',
            'CloseGray',
            'Options',
            'Camera',
            'User',
            'Zona',
            'Manual',
            'Journal',
            'Plus',
            'ChangeProfile',
            'PersonalBig',
            'Calendar'
          ].includes(value)
        }
      },
      width: {
        type: [Number, String],
        required: false,
        default: 45
      },
      height: {
        type: [Number, String],
        required: false,
        default: 45
      },
      fill: {
        type: String,
        required: false,
        default: 'none'
      },
      cViewBox: {
        type: String,
        required: false
      }
    },
    setup(props) {
      const viewBox = computed(() => `0 0 ${props.width} ${props.height}`)
      const currentIconName = computed(() => 'icon' + props.iconName)

      return {
        viewBox,
        currentIconName
      }
    }
  }
</script>
