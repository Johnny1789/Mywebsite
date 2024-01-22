import {defineStore} from 'pinia'
import {UserModel} from '../models/UserModel.ts'

export const userStore = defineStore('user', {
  state: () => ({
    users: <UserModel[]>[], // table users
  }),
  actions: {
    
  },
  persist: {
    storage: localStorage
  }
})