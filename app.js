import express from "express"
import https from "https"
import "dotenv/config"
import path from "path"
import { fileURLToPath } from "url"
import bodyParser from "body-parser"
const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

const app = express()

const apiKey = process.env.API_KEY
const listID = process.env.LIST_ID
const server = process.env.SERVER

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static("public"))

app.get("/", (req, res) => {
	res.sendFile(`${__dirname}/signup.html`)
})

app.post("/", (req, res) => {
	const reqDataObj = {
		fName: req.body.firstName,
		lName: req.body.lastName,
		email: req.body.email,
	}

	const data = {
		members: [
			{
				email_address: reqDataObj.email,
				status: "subscribed",
				merge_fields: {
					FNAME: reqDataObj.fName,
					LNAME: reqDataObj.lName,
				},
			},
		],
	}

	const jsonData = JSON.stringify(data)
	const url = `https://us${server}.api.mailchimp.com/3.0/lists/${listID}`
	const options = {
		method: "POST",
		auth: `Pan.Be:${apiKey}`,
	}

	const request = https.request(url, options, (response) => {
		// console.log(response.statusCode)

		response.on("data", (data) => {
			const dataObj = JSON.parse(data)

			if (response.statusCode === 200 && dataObj.error_count === 0) {
				res.sendFile(`${__dirname}/success.html`)
			} else {
				res.sendFile(`${__dirname}/failure.html`)
			}
		})
	})
	request.write(jsonData)
	request.end()
})

app.post("/failure.html", (req, res) => {
	res.redirect("/")
})

app.listen(3000, () => console.log("server is running on port 3000."))
