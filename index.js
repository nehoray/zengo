
import express from 'express'
import { applyRoutes } from "./routes.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config()

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const port = process.env.PORT
const address = process.env.ADDRESS

applyRoutes(app)

app.listen(port, () => {
    console.log(`Example app listening at ${address}:${port}`)
})