let day = new Date().getDate()
let month = new Date().getMonth() + 1
let year = new Date().getFullYear();
let lastMonthDay = new Date(year, month + 1, 0)
export const getArrivDate = () => {
	return [
		month && day < 10 ? `${year}-0${month}-0${day + 1}` :
			month < 10 ? `${year}-0${month}-${day + 1}` :
				day < 10 ? `${year}-${month}-0${day + 1}` :
					`${year}-${month}-${day + 1}`,
		month + 1 && day < 10 ? `${year}-0${month + 1}-0${lastMonthDay.getDate()}` :
			month + 1 < 10 ? `${year}-0${month + 1}-${lastMonthDay.getDate()}` :
				day < 10 ? `${year}-${month + 1}-0${lastMonthDay.getDate()}` :
					`${year}-${month + 1}-${lastMonthDay.getDate()}`
	]
}

export const getExitDate = () => {
	return month && day < 10 && !!lastMonthDay.getDate() ? `${year}-0${month}-0${day + 3}` :
		month < 10 && !!lastMonthDay.getDate() ? `${year}-0${month}-${day + 3}` :
			day < 10 && !!lastMonthDay.getDate() ? `${year}-${month}-0${day + 3}` :
				!!lastMonthDay.getDate() ? `${year}-${month}-${day + 3}` :
					`${year}-${month}-${day}`
}
