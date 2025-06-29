<script setup lang="ts">
import {
  XcButton,
  XcPopconfirm,
  type DropdownItemProps,
  ja,
  ko,
  en,
  zhCn,
  zhTw,
  XcConfigProvider,
  XcMessage,
  XcNotification,
} from 'xc-element'
import { get } from 'lodash-es'
import { computed, ref, h } from 'vue'

const language = ref('')
const langMap = {
  ja,
  ko,
  en,
  zhCn,
  zhTw,
} as const
const locale = computed(() => get(langMap, language.value))
const changelang = () => {
  const l = ['zhCn', 'zhTw', 'ko', 'en', 'ja']
  language.value = l[(l.indexOf(language.value) + 1) % l.length]
}

const items: DropdownItemProps[] = [
  { command: '1', label: 'Action 1' },
  { command: '2', label: 'Action 2' },
  { command: '3', label: 'Action 3', divided: true },
  { command: '4', label: 'Action 4', disabled: true },
]
function confirm() {
  console.log('confirm')
}
function cancel() {
  console.log('cancel')
}

const open1 = () => {
  XcMessage({
    showClose: true,
    message: 'This is a message.',
  })
}
const open2 = () => {
  XcMessage({
    showClose: true,
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const open3 = () => {
  XcMessage({
    showClose: true,
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
}
const open4 = () => {
  XcMessage({
    showClose: true,
    message: 'Oops, this is a error message.',
    type: 'danger',
  })
}
function openNotify1() {
  XcNotification({
    title: 'Title',
    message: h('i', { style: 'color:teal' }, 'This is a remider'),
    position: 'bottom-right',
  })
}

function openNotify2() {
  XcNotification({
    title: 'Prompt',
    message: 'This is a message that does not auto close',
    duration: 0,
    position: 'top-left',
  })
}
</script>

<template>
  <xc-popconfirm title="确定删除吗？" @confirm="confirm" @cancel="cancel">
    <xc-button type="primary" size="small">Button</xc-button>
  </xc-popconfirm>
  <div class="row">
    <div class="col">
      <div class="desc">disabled</div>
      <xc-dropdown :items="items" disabled>
        <span class="dropdown-link"
          >Dropdown List <xc-icon icon="angle-down"
        /></span>
      </xc-dropdown>
    </div>
    <div class="col">
      <div class="desc">undisabled</div>
      <xc-dropdown :items="items">
        <span class="dropdown-link"
          >Dropdown List <xc-icon icon="angle-down"
        /></span>
      </xc-dropdown>
    </div>
  </div>
  <xc-button @click="changelang" type="info" style="margin-right: 20px"
    >change language</xc-button
  >
  <xc-config-provider :locale="locale">
    <xc-popconfirm title="Are you shure to delete this item?">
      <xc-button>Delete</xc-button>
    </xc-popconfirm>
  </xc-config-provider>
  <xc-button @click="open1">open1</xc-button>
  <xc-button @click="open2">open2</xc-button>
  <xc-button @click="open3">open3</xc-button>
  <xc-button @click="open4">open4</xc-button>
  <xc-button @click="openNotify1" plain>Closes automatically</xc-button>
  <xc-button @click="openNotify2" plain>Won't closes automatically</xc-button>
</template>
