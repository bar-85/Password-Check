const passwordword = document.querySelector('#password')
const info1 = document.querySelector('.info1')
const letters = /[a-z]/i
const num = /[0-9]/
const special = /[!@#$%^&*()]/
const valueMin = 10

const password1 = () => {
	if (
		password.value.length > valueMin &&
		password.value.match(letters) &&
		password.value.match(num) &&
		password.value.match(special)
	) {
		info1.textContent = 'Masz bardzo dobre hasło 😃'
		info1.style.color = 'gold'
	} else if (password.value.length > valueMin && password.value.match(letters) && password.value.match(num)) {
		info1.textContent = 'Masz średnie hasło 😐'
		info1.style.color = 'green'
	} else {
		info1.textContent = 'Masz słabe hasło 😨'
		info1.style.color = 'red'
	}
}

const password2 = () => {
	if (password.value !== '') {
		password1()
	} else {
		info1.textContent = 'Nie podałeś hasła...'
		info1.style.color = ''
	}
}

password.addEventListener('keyup', password2)
