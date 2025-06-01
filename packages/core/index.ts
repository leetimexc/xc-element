import { makeInstaller } from '@ns-element/utils'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import components from './components'
import '@ns-element/theme/index.css'

library.add(fas)

const installer = makeInstaller(components)

export * from '@ns-element/components'
export default installer
