import {renderSearchFormBlock} from './search-form.js'
import {renderSearchStubBlock} from './search-results.js'
import {renderUserBlock} from './user.js'
import {renderToast} from './lib.js'
import {getArrivDate} from "./date.js";
import {getExitDate} from "./date.js";
import {renderEmptyOrErrorSearchBlock} from "./search-results.js";
import {renderSearchResultsBlock} from "./search-results.js";

window.addEventListener('DOMContentLoaded', () => {
	renderUserBlock("./img/avatar.png", 'Wade Warren', 5)
	renderSearchFormBlock(getArrivDate(), getExitDate())
	renderSearchStubBlock()
	renderEmptyOrErrorSearchBlock('Message')
	renderSearchResultsBlock()
	renderToast(
		{text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
		{
			name: 'Понял', handler: () => {
				console.log('Уведомление закрыто')
			}
		}
	)
})
