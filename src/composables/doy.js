const daysInAMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
}
export default function dayOfTheYear(selectedYear, selectedMonth, selectedDay) {
    let doy = 0;
    for (let i = 1; i <= selectedMonth; i++) {
        if (i === selectedMonth) {
            doy += selectedDay
        } else {
            doy += daysInAMonth(selectedYear, i);
        }
    }
    return doy;
};

// console.log(daysInAMonth(currentYear,currentMonth))
// console.log(dayOfTheYear());