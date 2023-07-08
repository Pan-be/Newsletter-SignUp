import express from "express"
import path from "path"
import { fileURLToPath } from "url"
import bodyParser from "body-parser"
const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static("public"))

app.get("/", (req, res) => {
	res.sendFile(`${__dirname}/signup.html`)
})

app.post("/", (req, res) => {
	const response = {
		fName: req.body.firstName,
		sName: req.body.secondName,
		email: req.body.email,
	}
	// const response = req.body.firstName
	console.log(`${response.fName} ${response.sName} ${response.email}`)
})

app.listen(3000, () => console.log("server is running on port 3000."))
