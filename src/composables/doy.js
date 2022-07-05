import {ref, watchEffect} from 'vue';

const daysInAMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
}

const dayOfTheYear = (date) => {
    let doy = ref(0);
    watchEffect(() => {
        if (date.value !== null) {
            doy.value = 0;
            const [selectedYear, selectedMonth, selectedDay] = Array.from(date.value.split('/'), Number);

            for (let i = 1; i <= selectedMonth; i++) {
                if (i === selectedMonth) {
                    doy.value += selectedDay
                } else {
                    doy.value += daysInAMonth(selectedYear, i);
                }
            }
        }
    })
    return doy;
}


export default dayOfTheYear;

// console.log(daysInAMonth(currentYear,currentMonth))
// console.log(dayOfTheYear());