class User {
	userName: string
	avatarURL: string

	constructor(userName: string, avatarURL: string) {
		this.userName = userName
		this.avatarURL = avatarURL
	}
}

const getUserData = () => {
	const user: unknown = JSON.parse(<string>window.localStorage.getItem('user'))
	Object.setPrototypeOf(user, User.prototype)

	if (user instanceof User) {
		return user
	} else {
		throw new Error('Error')
	}
}


const getFavoriteAmount = () => +<string>window.localStorage.getItem('favoriteAmount')

export {User, getUserData, getFavoriteAmount}
