import {useDayOfTheYear} from '../composables/doy.js'
import {ref} from 'vue'
import {defineStore} from "pinia";

export const dayOfTheYear = defineStore('dayOfTheYear', () => {
    const date = ref('');
    const {doy, progress} = useDayOfTheYear(date);
    const setToday = () => {
        date.value = new Date().toISOString().substring(0, 10).replaceAll('-', '/')
    }

    return {date, doy, progress, setToday}
})
