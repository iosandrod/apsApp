import { createPinia } from "pinia"
const store = Object.entries(import.meta.globEager('./*.js')).reduce(
  //*/ 
  (result, [key, value]) => {
    const _key = key.split('/').pop().replace(/.js$/g, '')
    let _store = value.default
    result[_key] = _store
    return result
  },
  {}
)
class piniaPlugin {
  constructor() {
    this.pinia = createPinia()
  }
  //install函数，用来给
  install(app) {
    app.use(this.pinia)
    Object.entries(store).forEach(([key, value]) => {
      if (typeof value == 'function') {
        this[key] = value()
      }
    })
    app.config.globalProperties.$store = this
  }
}
const _pinia = new piniaPlugin()
export default function myPinia() {
  return _pinia
}