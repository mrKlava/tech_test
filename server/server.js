import express from "express"
import cors from "cors"

import brandsRoutes from "./routes/brands.js"


/* Variables */

const PORT = 2280
const ORIGIN_CLIENT = "http://localhost:3000"

const app = express()


/* Middleware */

app.use(cors({ origin: ORIGIN_CLIENT }))
app.use(express.json())


/* Routing */

app.use("/api/brands", brandsRoutes)


/* Run server */

app.listen(PORT, () => {
  console.log(`Server turning on ${PORT}`)
})
