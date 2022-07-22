import {defineStore} from 'pinia'
import {useDayOfTheYear} from '../composables/doy.js'
import {ref} from 'vue'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useStore = defineStore('main', {
        // other options...
        state: () => {
            return {
                date: '',
            }
        },
        actions: {
            setToday() {
                this.date = new Date().toISOString().substring(0, 10).replaceAll('-', '/')
            }
        },

        getters:{

            doy(){
                if(this.date !== null) {
                    const {doy, progress} = useDayOfTheYear(ref(this.date))
                    return {doy, progress}
                }
            }
        }
    }
)
