import express from "express"
import { CLIENT_RENEG_WINDOW } from "tls";
import {config} from 'dotenv';
import morgan from "morgan"
import appRouter from "./routes/index.js";
config()
const app = express()



app.use(express.json())
app.use(morgan("dev"))
app.use("/api/v1/",appRouter)

export default app;