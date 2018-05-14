import express from 'express'
import logger from 'morgan'
import router from './src/routes/index'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import db from './src/models'
import formidable from 'express-formidable'
import {} from 'dotenv/config'

let app = express()
const port = process.env.PORT || 8888

app.use(formidable())
app.use(logger('dev'))
app.use(cookieParser())
app.use(compression())
app.use(cors())

app.use('/api', router)

app.listen(port, function () {
    // dev mode
    db.sequelize.sync({force:false})
    console.log(`Server listening on port  ${port}!`)
})

export default app