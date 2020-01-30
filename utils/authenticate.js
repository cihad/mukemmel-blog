import AuthService from "./AuthService"

async function login () {
	const authService = new AuthService()
	var password = prompt("Admin parolası", "");
	if (password == null) return false;

	const res = await authService.login(password)

	if (res.ok) {
		alert("Başarılı giriş")
		return true
	} else {
		alert("Yanlış parola");
		return await login()
	}
}

export default async function authenticate () {
	const authService = new AuthService()
	if (!authService.loggedIn()) {
		debugger
		return await login()
	}
}