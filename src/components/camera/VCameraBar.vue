<script setup>
  import VCameraItem from '@/components/camera/VCameraItem'
  import { reactive, watch } from 'vue'
  import { useComputedManual } from '@/composables/useComputedManual'

  const cameraList = reactive([])
  const recognitionCamera = reactive([])
  const { getCameras } = useComputedManual()

  watch(getCameras, () => {
    if (getCameras.value.length) {
      clearList()
      setCamera()
    }
  }, { deep: true, immediate: true })


  function clearList() {
    cameraList.length = 0
    recognitionCamera.length = 0
  }

  function setCamera() {
    getCameras.value.forEach((item, idx) => {
      if (item.is_recognition === 1 || idx === 15) {
        recognitionCamera.push(item)
      } else {
        cameraList.push(item)
      }
    })
  }

</script>

<template>
  <div class='d-flex justify-space-between'>
    <v-camera-item is-recognition :route='recognitionCamera[0]?.url'
    >{{ recognitionCamera[0]?.number }}
    </v-camera-item>
    <v-list class='d-flex justify-center flex-wrap camera-list' width='1060' bg-color='bg'>
      <v-list-item
        v-for='camera in cameraList'
        :key='camera.title'
      >
        <v-camera-item v-if='camera' :route='camera.url'>
          {{ camera.number }}
        </v-camera-item>
      </v-list-item>
    </v-list>
    <v-camera-item is-recognition :route='recognitionCamera[1]?.url'>
      {{ recognitionCamera[1]?.number }}
    </v-camera-item>
  </div>
</template>

<style scoped>
  .camera-list {
    display: grid;
    grid-template-columns: repeat(8, 10%);
    grid-row-gap: 18px;
  }
</style>
