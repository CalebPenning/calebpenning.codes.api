import express from "express"
import weatherRouter from "./routes/weather.js"
import morgan from "morgan"

const app = express()

app.use(express.json())
app.use(morgan("tiny"))

app.get("/health", (_, res) => {
	return res.status(200).send("OK")
})

app.use("/api/weather", weatherRouter)

app.listen(process.env.PORT || 3000)
