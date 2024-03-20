import express from "express"
import cors from "cors"

import brandsRoutes from "./routes/brands.js"
import pythonRoutes from "./routes/python.js"


/* Variables */

const PORT = 2280
const ORIGIN_CLIENT = "http://localhost:3000"

const app = express()


/* Middleware */

app.use(cors({ origin: ORIGIN_CLIENT }))
app.use(express.json())


/* Routing */

app.use("/api/brands",      brandsRoutes) // this route is using only node.js to get data and return result
app.use("/api/py/brands",   pythonRoutes) // this route is using python to get and handle data 


/* Run server */

app.listen(PORT, () => {
  console.log(`Server turning on ${PORT}`)
})
