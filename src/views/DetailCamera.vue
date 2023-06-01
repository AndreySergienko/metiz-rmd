<script setup>
  import TheHeaderDetailCamera from '@/components/camera/partial-view/TheHeaderDetailCamera'
  import { useDetailEventFetch } from '@/composables/useDetailEventFetch'
  import VCameraPhotoCard from '@/components/camera/card/VCameraPhotoCard'
  import VCameraInfoCard from '@/components/camera/card/VCameraInfoCard'
  import VCameraVideoCard from '@/components/camera/card/VCameraVideoCard'

  import VLoader from '@/components/ui/loader/VLoader'

  const { event, isLoader } = useDetailEventFetch()
</script>

<template>
  <the-header-detail-camera :info='event' />

  <v-container fluid class='px-0'>
    <v-row v-if='!isLoader'>
      <v-col class='card--adaptive'>
        <v-camera-info-card :info='event' />
        <v-camera-photo-card :url='event.photo_url' />
      </v-col>
      <v-col cols='7' class='card--adaptive--big'>
        <v-camera-video-card
          :url='event.video_url'
          :cam='event.cam'
          :has_video='event.has_video'
        />
      </v-col>
    </v-row>

    <v-row
      align='center'
      justify='center'
      :class='[isLoader && "full-height"]'
      v-else
    >
      <div class='height-50vh d-flex align-center'>
        <v-loader />
      </div>
    </v-row>
  </v-container>
</template>

<style>
  .height-50vh {
    height: 50vh;
  }

  .card {
    max-width: 565px;
    width: 100%;
  }

  .card-primary {
    box-shadow: 0 4px 30px rgba(28, 73, 142, 0.1) !important;
    border-radius: 7px;
  }

  .card__body-circle {
    position: relative;
  }

  .card__body-statistic span {
    color: var(--color-dark);
    font-size: 30px;
  }

  .card__body-circle::after {
    position: absolute;
    content: '';

    left: -30px;
    top: 0;

    width: 1px;
    height: 100%;

    background-color: var(--color-light);
  }

  .card__title {
    color: var(--color-dark);
    font-weight: 600;
    font-size: 18px;
  }

  .card__border {
    border-bottom: 1px solid var(--color-light);
    border-top: 1px solid var(--color-light);
  }

  .btn-camera {
    cursor: pointer;
  }

  .btn-camera:hover rect:not(:first-child),
  .btn-camera.active rect:not(:first-child),
  .btn-camera.active path,
  .btn-camera:hover path {
    stroke: var(--color-light-blue);
  }

  .card__big-title {
    font-size: 24px;
    font-weight: 600;
    color: var(--color-blue);
    text-transform: uppercase;
  }
</style>
