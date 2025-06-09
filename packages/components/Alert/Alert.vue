<script lang="ts" setup>
import type { AlertProps, AlertEmits, AlertInstance } from './types'
import { ref } from 'vue'
import XcIcon from '../Icon/Icon.vue'

defineOptions({
  name: 'XcAlert',
})
const props = withDefaults(defineProps<AlertProps>(), {
  effect: 'light',
  type: 'info',
  closable: false,
})
const emit = defineEmits<AlertEmits>()
const slots = defineSlots()

const visible = ref(true)

function close() {
  visible.value = false
  emit('close')
}

function open() {
  visible.value = true
}

defineExpose<AlertInstance>({
  close,
  open,
})
</script>
<template>
  <transition name="xc-alert-fade">
    <div
      v-show="visible"
      class="xc-alert"
      role="alert"
      :class="{
        [`xc-alert__${type}`]: type,
        [`xc-alert__${effect}`]: effect,
        'text-center': center,
      }"
    >
      <XcIcon
        v-if="showIcon"
        class="xc-alert__icon"
        :class="{ 'big-icon': withDescription }"
        :icon="iconName"
      />
      <div class="xc-alert__content">
        <span
          class="xc-alert__title"
          :class="{ 'with-desc': withDescription }"
          :style="{ display: center && !showIcon ? 'flow' : 'inline' }"
        >
          <slot name="title">{{ title }}</slot>
        </span>
        <p class="xc-alert__description">
          <slot>{{ description }}</slot>
        </p>
        <div class="xc-alert__close" v-if="closable">
          <XcIcon @click.stop="close" icon="xmark" />
        </div>
      </div>
    </div>
  </transition>
</template>
<style scoped></style>
