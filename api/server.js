import express from 'express'
import dotenv from 'dotenv'
import mongoDBConnect from './config/db.js';
import studentRouter from './routers/studentRouter.js'
import errorHandler from './middlewares/errorHandler.js';
import cookieParser from 'cookie-parser';

// Express init
const app = express()

// Dot env config
dotenv.config()

// Dot env variable init
const port = process.env.SEVER_PORT || 5000
const server_name = process.env.SERVER_NAME

// Body init
app.use(express.json())
app.use(express.urlencoded({ extended : false }))

// cookie parser init
app.use(cookieParser())

// Student router
app.use('/api/student', studentRouter)

// Express error handler
app.use(errorHandler)

app.listen(port, () => {
    mongoDBConnect()
    console.log(`${server_name} server running on http://localhost:${port}`)
})
