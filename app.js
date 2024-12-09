require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const errorHandlerMiddleware = require('./middleware/error-handler')
const notFoundMiddleware = require('./middleware/not-found')
const { getAllProducts, getAllProductsStatic } = require('./controllers/products')
const productsRouter = require('./routes/products')

port = process.env.PORT || 3000

//middleware
app.use('/api/v1/products', productsRouter);

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


const start = async () => {
    try {
        await connectDB(process.env.Mongo_URI)
        app.listen(port, () => {
        console.log(`server active and listening on port ${port}`);  
    })

    } catch (error) {
        console.error(error);
        
    }
    
}

start()