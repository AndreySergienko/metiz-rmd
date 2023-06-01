<script setup>
  import VCustomIcon from '@/modules/customIcon/VCustomIcon'
  import VBlockText from '@/components/VBlockText'
  import { defineProps } from 'vue'
  import { useCardInfoUser } from '@/composables/useCardInfoUser'
  import VAvatarCustom from '@/components/VAvatarCustom'
  import VMenuStateEvent from '@/components/VMenuStateEvent'
  import { useIsState } from '@/composables/useIsState'

  const props = defineProps({
    info: {
      type: Object,
      required: true
    }
  })

  const { isState: isShowDescription, toggle } = useIsState()
  const { cardInfo, cardInfoThisChecked } = useCardInfoUser(props.info)

  const getColorOnProgress = () => {
    if (cardInfo.probability < 70) {
      return 'blue'
    } else if (cardInfo.probability < 85) {
      return 'warn'
    } else {
      return 'error'
    }
  }
</script>

<template>
  <v-card class='card card-primary mb-5' border='0'>
    <div class='d-flex justify-space-between align-center py-5 px-8'>
      <h3 class='card__title'>ID: {{ info.id }}</h3>

      <v-custom-icon
        :class='["btn-camera", isShowDescription && "active"]'
        icon-name='ChangeProfile' width='35' height='32'
        @click='toggle'
      />
    </div>

    <div class='card__border py-5 px-8'>
      <div class='flex-wrap w-100 d-flex justify-space-between'>
        <div class='d-flex flex-column justify-space-between'>
          <v-block-text
            :class="!i && 'mb-5'"
            :item='item'
            v-for='(item, i) in cardInfo.item'
            :key='item.title'
          />
        </div>

        <div class='d-flex flex-column justify-space-between'>
          <div class='mb-5 d-flex align-center'>
            <v-avatar-custom
              v-if='info.responsible'
              :user='info.responsible'
            />
          </div>

          <v-block-text
            :item='cardInfoThisChecked[0]'
          />
        </div>

        <div class='card__body-statistic'>
          <v-progress-circular
            class='card__body-circle'
            :color='getColorOnProgress()'
            :model-value='info.probability'
            :size='100'
            :width='12'
          >
            <span>{{ info.probability }}%</span>
          </v-progress-circular>
        </div>
      </div>
    </div>

    <div class='d-flex py-5 px-8'>
      <v-menu-state-event
        is-mode-card
        :is-show-description='!isShowDescription'
        :item='info'
      />
    </div>
  </v-card>
</template>
