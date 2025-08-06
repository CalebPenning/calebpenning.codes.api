import { Router } from "express"
import config from "../config"

const router = Router()
const { WEATHER_API_BASE_URL, API_KEY, CURRENT_ROUTE, FORECAST_ROUTE } = config

const currentWeatherRoute = `${WEATHER_API_BASE_URL}/${CURRENT_ROUTE}?key=${API_KEY}`
const forecastWeatherRoute = `${WEATHER_API_BASE_URL}/${FORECAST_ROUTE}?key=${API_KEY}`

router.get("/current", async (req, res) => {
	const { query } = req.query
	if (query) {
		const apiReq = await fetch(currentWeatherRoute + `&q=${query}&aqi=yes`)
		if (!apiReq.ok) {
			console.error(
				"Error in /api/weather/current: ",
				await apiReq.text(),
				"\n",
				apiReq.statusText,
			)
			res.status(500).json({
				error:
					"An unknown exception has occured. " +
					new Error(await apiReq.text()).message,
			})
		}
		const weatherData = await apiReq.json()
		return res.status(200).json({ result: weatherData })
	}
	return res.status(400).json({
		error: "Enter a valid location i.e. your city name, zip code, etc.",
	})
})

router.get("/forecast", async (req, res) => {
	const { query, days } = req.query
	if (query) {
		const apiReq = await fetch(
			forecastWeatherRoute + `&q=${query}&days=${days}`,
		)
		if (!apiReq.ok) {
			console.error(
				"Error in /api/weather/forecast: ",
				await apiReq.text(),
				"\n",
				apiReq.statusText,
			)
			res.status(500).json({
				error:
					"An unknown exception has occured. " +
					new Error(await apiReq.text()).message,
			})
		}
		const weatherData = await apiReq.json()
		return res.status(200).json({ result: weatherData })
	}
	return res.status(400).json({
		error: "Enter a valid location i.e. your city name, zip code, etc.",
	})
})

export default router
