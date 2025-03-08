import { AppDataSource, ensureDbExists } from "./_helpers/db"
import express from 'express'
import { userRouter } from './users/users.routes'
import errorHandler from './_middlewares/error-handler'

const app = express()
const port = process.env.PORT as unknown as number || 3000

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



//db initilization
ensureDbExists()
    .then(() => {
        AppDataSource.initialize()
            .then(() => {
                console.log("Database connected")
            })
            .catch(error => console.log(error))
    })

// Routes
app.use('/api/users', userRouter);

// Catch 404 errors and forward to error handler
app.use((req, res, next) => {
    next("Not Found");
});

// Global error handler (must be last!)
app.use(errorHandler);


//start server
app.listen(port, () => {
    console.log(`Server started at http://localhost:3000`)
})