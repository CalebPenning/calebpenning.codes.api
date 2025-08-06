import { config as configureEnv } from "dotenv"

configureEnv()

const config = {
	WEATHER_API_BASE_URL: "https://api.weatherapi.com/v1",
	FORECAST_ROUTE: "forecast.json",
	CURRENT_ROUTE: "current.json",
	SEARCH: "search.json",
	API_KEY: process.env.WEATHER_API_KEY,
}

export default config
