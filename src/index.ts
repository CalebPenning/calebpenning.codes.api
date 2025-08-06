import express from "express"
import weatherRouter from "./routes/weather.js"
import morgan from "morgan"

const app = express()

app.use(express.json())
app.use(morgan("tiny"))

app.use("/api/weather", weatherRouter)

app.listen(process.env.PORT || 3000)
