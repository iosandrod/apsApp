import { createSSRApp } from 'vue'
import * as Pinia from 'pinia'
import App from './App.vue'
import createPinia from './stores'
export function createApp() {
  const app = createSSRApp(App)
  app.use(createPinia())
  return {
    app,
    Pinia
  }
}