import { isString } from 'lodash-es'

class XcUIError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'XcUIError'
  }
}

export function throwError(scope: string, msg: string) {
  throw new XcUIError(`[${scope}] ${msg}`)
}

export function debugWarn(error: Error): void
export function debugWarn(scope: string, msg: string): void
export function debugWarn(scope: string | Error, msg?: string) {
  if (process.env.NODE_ENV !== 'production') {
    const err = isString(scope) ? new XcUIError(`[${scope}] ${msg}`) : scope
    console.warn(err)
  }
}
