const daysInAMonth = (year, month, date) => {
    return new Date(year, month, date).getDate();
}
export default function dayOfTheYear (selectedYear, selectedMonth, selectedDay) {
    let doy = 0;
    for (let i = 1; i <= selectedMonth; i++) {
        doy += daysInAMonth(selectedYear, i, i === selectedMonth ? selectedDay : 0);
    }
    return doy;
};

// console.log(daysInAMonth(currentYear,currentMonth))
// console.log(dayOfTheYear());