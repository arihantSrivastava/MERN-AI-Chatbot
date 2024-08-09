import express from "express"
import { CLIENT_RENEG_WINDOW } from "tls";
import {config} from 'dotenv';
config()
const app = express()



app.use(express.json())

export default app;