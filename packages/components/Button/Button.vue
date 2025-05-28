<script lang="ts" setup>
import { ref } from 'vue'
import type { ButtonProps } from './types'

defineOptions({
  name: 'NsButton',
})
const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'primary',
  nativeType: 'button',
  size: 'default',
  plain: false,
  round: false,
  circle: false,
  disabled: false,
  loading: false,
  icon: '',
  tag: 'button',
})

const slots = defineSlots()

const _ref = ref<HTMLButtonElement>()
</script>
<template>
  <component
    :is="props.tag"
    ref="_ref"
    class="ns-button"
    :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled || loading ? true : void 0"
    :class="{
      [`ns-button--${type}`]: true,
      [`ns-button--${size}`]: true,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
  >
    <slot></slot>
  </component>
</template>
<style scoped>
@import './style.css';
</style>
