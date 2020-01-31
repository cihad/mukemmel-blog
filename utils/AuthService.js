import { API_BASE } from "../src/config"	

export default class AuthService {	
	constructor() {	
	  	this.login = this.login.bind(this)	
	}	

	login(password) {	
		return fetch(`${API_BASE}/login`, {	
			method: 'POST',	
			body: JSON.stringify({ password }),	
			headers: {	
				'Accept': 'application/json',	
				'Content-Type': 'application/json'	
			},	
		}).then(res => {	
			if (res.ok) {	
				this.setToken(res.token)	
			}	

			return res	
		})	
	}	

	loggedIn(){	
		const token = this.getToken()	
		return !!token	
	}	

	setToken(idToken){	
	  	localStorage.setItem('token', idToken)	
	}	

	getToken(){	
	  	return localStorage.getItem('token')	
	}	

	logout(){	
	  	localStorage.removeItem('token');	
	}	
}
