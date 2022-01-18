export interface SearchFormData {
	check_inData?: string
	exitData?: string
	price?: string
}

export const searchFunc = (formData: SearchFormData): void => {
	console.log(formData)
}
