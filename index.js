const express = require('express')
import {productRoutes} from "./routes/product";
import {categoryRoutes} from "./routes/categories";

const app = express()

app.use(express.json())

// Work space START <



app.use('/product', productRoutes)
app.use('/category', categoryRoutes)

// Work space END >



// Link of the server http://localhost:3000

app.listen(3000, () => {
    console.log("Server is working");
})