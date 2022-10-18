import { defineStore } from 'pinia'
import axios from "axios"
export const useLocalStore = defineStore("Local", {
    state: () => ({
        ip: '',
        mac: '',
        netMask: ''
    }),
    getters: {
        getIP(state) {
          return state.ip
        },
        getMac(state) {
          return state.mac
        },
        getNetMask(state) {
          return state.netMask
        }
    },
    actions: {
      async fetchIP() {
        try {
          const data = await axios.get('http://127.0.0.1:5000')
            this.ip = data.data.IP
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      },
      async fetchMac() {
        try {
          const data = await axios.get('http://127.0.0.1:5000')
            this.mac = data.data.Mac
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      },
      async fetchNetMask() {
        try {
          const data = await axios.get('http://127.0.0.1:5000')
            this.netMask = data.data.Netmask
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      }
    },
})
