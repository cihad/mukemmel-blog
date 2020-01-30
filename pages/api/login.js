import fetch from 'isomorphic-unfetch'
import CryptoJS from "crypto-js"
import { SECRET_KEY, ENCRYPTED_PASSWORD } from "../../src/config"

export default async (req, res) => {
	const { password } = await req.body

	console.log("PASWORD", password)

	if (password == CryptoJS.AES.decrypt(ENCRYPTED_PASSWORD, SECRET_KEY).toString(CryptoJS.enc.Utf8)) {
		console.log("YESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS")
		res.status(200).json({ token: 1 })
	} else {
		console.log("NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
		res.status(400).json({ message: "error" })
	}
}