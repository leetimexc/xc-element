import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, createApp } from 'vue'
import { withInstall, makeInstaller } from '../install'

const AppComp = defineComponent({
  setup() {
    return () => <div>app</div>
  },
})

const componentA = withInstall(
  defineComponent({
    name: 'componentA',
    setup() {
      return () => <div>test</div>
    }
  })
)

const componentB = withInstall(
  defineComponent({
    name: 'componentB',
    setup() {
      return () => <div>test2</div>
    },
  })
)

describe('install', () => {
  it('withInstall should be worked', () => {
    const wrapper = mount(() => <div id="app"></div>)
    const app = createApp(AppComp)

    app.use(componentA).mount(wrapper.element)

    expect(componentA.install).toBeDefined()
    expect(componentB.install).toBeDefined()
    expect(app._context.components['componentA']).toBeTruthy()
    expect(app._context.components['componentB']).toBeFalsy()
  })

  it('makeInstaller should be worked', () => {
    const wrapper = mount(() => <div id="app"></div>)
    const app = createApp(AppComp)
    const installer = makeInstaller([componentA, componentB])

    app.use(installer).mount(wrapper.element)

    expect(installer).toBeDefined()
    expect(wrapper.findComponent(componentA)).toBeTruthy()
    expect(wrapper.findComponent(componentB)).toBeTruthy()
  })
})
