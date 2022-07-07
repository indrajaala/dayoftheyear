import {ref, watchEffect} from 'vue';

const daysInAMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
}

// dayOfTheYear takes input 'date' in the format 'YYYY/MM/DD'
const dayOfTheYear = (date) => {
    let doy = ref(null);
    let progress = ref(null);

    const makeDoy = () => {
        doy.value = null;
        progress.value = null;
        const [selectedYear, selectedMonth, selectedDay] = Array.from(date.value.split('/'), Number);

        for (let i = 1; i <= selectedMonth; i++) {
            if (i === selectedMonth) {
                doy.value += selectedDay
            } else {
                doy.value += daysInAMonth(selectedYear, i);
            }
        }

        progress.value = doy.value/365;
    }

    watchEffect(() => {
        if (date.value !== null) {
            makeDoy()
        }
    })

    return {doy, progress};
}


export default dayOfTheYear;

// console.log(daysInAMonth(currentYear,currentMonth))
// console.log(dayOfTheYear());