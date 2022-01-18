const userData = {avatarURL: "./img/avatar.png", userName: 'Wade Warren'}
export const setStorage = () => {
	localStorage.setItem('user', JSON.stringify(userData))
	localStorage.setItem('favoriteAmount', JSON.stringify(5))
}
