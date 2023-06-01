import { defineStore } from 'pinia'

export default defineStore('counter', {
  state: () => {
    let userInfo = {}
    return { userInfo }
  }
})
