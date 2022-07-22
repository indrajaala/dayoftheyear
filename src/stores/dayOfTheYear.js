import {useDayOfTheYear} from '../composables/doy.js'
import {ref} from 'vue'

const date = ref('');
const setToday = () => {
    date.value = new Date().toISOString().substring(0, 10).replaceAll('-', '/')
}
const {doy, progress} = useDayOfTheYear(date);

export {
    date, setToday,doy,progress
}
