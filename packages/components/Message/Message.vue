<script setup lang="ts">
import type { MessageProps } from './types'
import { computed, onMounted, ref } from 'vue'
import { delay } from 'lodash-es'
import { typeIconMap, RenderVnode } from '@xc-element/utils'

defineOptions({ name: 'XcMessage' })

const props = withDefaults(defineProps<MessageProps>(), {
  type: 'info',
  duration: 3000,
  offset: 10,
  transitionName: 'fade-up',
})

const visible = ref(false)
const messageRef = ref<HTMLDivElement>()
const iconName = computed(() => typeIconMap.get(props.type) ?? 'circle-info')

let timer: number
function startTimmer() {
  if (props.duration === 0) return
  timer = delay(close, props.duration)
}

function clearTimer() {
  clearTimeout(timer)
}

function close() {
  visible.value = false
}

onMounted(() => {
  visible.value = true
  startTimmer()
})

defineExpose({
  close,
})
</script>

<template>
  <Transition :name="transitionName" @after-leave="!visible && onDestory()">
    <div
      ref="messageRef"
      class="xc-message"
      :class="{
        [`xc-message--${type}`]: type,
        'is-close': showClose,
        'text-center': center,
      }"
      v-show="visible"
      role="alert"
      @mouseenter="clearTimer"
      @mouseleave="startTimmer"
    >
      <xc-icon class="xc-message__icon" :icon="iconName" />
      <div class="xc-message__content">
        <slot>
          <render-vnode v-if="message" :vNode="message" />
        </slot>
      </div>
      <div class="xc-message__close" v-if="showClose">
        <xc-icon icon="xmark" @click.stop="close" />
      </div>
    </div>
  </Transition>
</template>
