<script lang="ts" setup>
import { ref, computed } from 'vue'
import { addUnit } from '@xc-element/utils'
import { useLocale } from '@xc-element/hooks'
import type { TooltipInstance } from '../Tooltip'
import type { PopconfirmProps, PopconfirmEmits } from './types'

import XcTooltip from '../Tooltip/Tooltip.vue'
import XcButton from '../Button/Button.vue'
import XcIcon from '../Icon/Icon.vue'

defineOptions({
  name: 'XcPopconfirm',
})

const props = withDefaults(defineProps<PopconfirmProps>(), {
  title: '',
  confirmButtonType: 'primary',
  // confirmButtonText: 'Yes',
  // cancelButtonText: 'No',
  // icon: 'question-circle',
  iconColor: '#f90',
  hideAfter: 200,
  width: 150,
})

const emits = defineEmits<PopconfirmEmits>()
const tooltipRef = ref<TooltipInstance>()
const style = computed(() => ({ width: addUnit(props.width) }))

const { t } = useLocale()

function hidePopper() {
  tooltipRef.value?.hide()
}
function confirm(e: MouseEvent) {
  emits('confirm', e)
  hidePopper()
}

function cancel(e: MouseEvent) {
  emits('cancel', e)
  hidePopper()
}
</script>

<template>
  <xc-tooltip ref="tooltipRef" trigger="click" :hide-timeout="hideAfter">
    <template #content>
      <div class="xc-popconfirm" :style="style">
        <div class="xc-popconfirm__main">
          <xc-icon v-if="!hideIcon && icon" :icon="icon" :color="iconColor" />
          {{ title }}
        </div>
        <div class="xc-popconfirm__action">
          <xc-button
            size="small"
            class="xc-popconfirm__cancel"
            :type="cancelButtonType"
            @click="cancel"
          >
            {{ cancelButtonText || t('popconfirm.cancelButtonText') }}
          </xc-button>
          <xc-button
            size="small"
            class="xc-popconfirm__confirm"
            :type="confirmButtonType"
            @click="confirm"
          >
            {{ confirmButtonText || t('popconfirm.confirmButtonText') }}
          </xc-button>
        </div>
      </div>
    </template>

    <template v-if="$slots.default" #default>
      <slot name="default"></slot>
    </template>

    <template v-if="$slots.reference" #default>
      <slot name="reference"></slot>
    </template>
  </xc-tooltip>
</template>

<style scoped>
@import './style.css';
</style>
