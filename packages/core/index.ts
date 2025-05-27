import { makeInstaller } from '@ns-element/utils'
import components from './components'
import '@ns-element/theme/index.css'

const installer = makeInstaller(components)

export * from '@ns-element/components'
export default installer
