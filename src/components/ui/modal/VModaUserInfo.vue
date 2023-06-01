<script setup>
  import VModalCard from '@/components/ui/modal/VModalCard'
  import { useVModal } from '@/composables/useIsState'
  import VCustomIcon from '@/modules/customIcon/VCustomIcon'
  import VBlockText from '@/components/VBlockText'

  const { isOpen, close } = useVModal()

  const items = [
    {
      title: 'Пароль',
      description: 'asdad'
    },
    {
      title: 'Email',
      description: 'test'
    },
    {
      title: 'Роль',
      description: 'Оператор'
    }
  ]
</script>

<template>
  <v-modal-card
    v-model='isOpen'
    width='838'
    title='Карточка пользователя'
    @close='close'
    @update:modelValue='close'
  >
    <v-container fluid class='flex personal__block'>
      <div class='profile__img'>
        <v-custom-icon icon-name='PersonalBig' :width='95' :height='95' />
        <p>
          Петров
          <br>
          Пётр Петрович
        </p>
      </div>
      <div class='position-relative personal__info'>
        <v-custom-icon
          class='position-absolute'
          icon-name='ChangeProfile'
          width='35'
          height='32'
        />
        <v-block-text v-for='item in items' :key='item.title' :item='item' />
      </div>
    </v-container>
  </v-modal-card>
</template>

<style>
  .personal__block {
    padding: 0 !important;
    border: 1px solid #D0E8FD;
    border-radius: 7px;
  }

  .profile__img {
    padding: 30px 45px 60px;

    border-right: 1px solid #d0e8fd;
  }

  .profile__img p {
    margin-top: 10px;

    font-weight: 600;
    font-size: 20px;
    line-height: 120%;

    text-align: center;
  }

  .personal__info {
    padding: 40px;

    width: 100%;
    text-align: left;
  }

  .personal__info svg {
    right: 25px;
    top: 20px;
  }
</style>
