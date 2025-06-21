<script setup lang="ts">
import { XcButton, XcPopconfirm } from 'xc-element'
function confirm() {
  console.log('confirm')
}
function cancel() {
  console.log('cancel')
}
</script>

<template>
  <xc-popconfirm title="确定删除吗？" @confirm="confirm" @cancel="cancel">
    <xc-button type="primary" size="small">Button</xc-button>
  </xc-popconfirm>
</template>
