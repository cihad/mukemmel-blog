import React from 'react'
import AuthService from './AuthService.js'

export default function withAuth(AuthComponent) {
	const Auth = new AuthService()

	return class Authenticated extends React.Component {
		render() {
			return (
				<AuthComponent {...this.props} auth={Auth} />
			)
		}
	}
}