import express from "express"
import weatherRouter from "./routes/weather"

const app = express()

app.use(express.json())

app.use("/api/weather", weatherRouter)

app.listen(process.env.PORT || 3000)
