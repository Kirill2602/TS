import {renderBlock} from './lib.js'
import {searchFunc, SearchFormData} from "./searchFormData.js";

export type nameType = 'check_inData' | 'exitData' | 'price'


export function renderSearchFormBlock(arrDate: Array<string>, exitDate: string) {

	function submitForm(e: SubmitEvent, values: nameType[]) {
		e.preventDefault()
		if (e.target) {
			const formData = new FormData(e.target as HTMLFormElement)
			const formDataEl: SearchFormData = {}

			values.forEach(k => {
				formDataEl[k] = <nameType>formData.get(k)
			})
			searchFunc(formDataEl)
		}
	}

	renderBlock(
		'search-form-block',
		`
    <form class="form">
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value=${arrDate[0]} min=${arrDate[0]} max=${arrDate[1]} name="check_inData" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value=${exitDate} min=${exitDate} max= ${arrDate[1]} name="exitData" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
	)
	const form = document.querySelector('form')

	if (form) {
		const arrNames: nameType[] = ['check_inData', 'exitData', 'price']
		form.addEventListener('submit', ev => submitForm(ev, arrNames))
	}
}
