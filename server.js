const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
const DB = 'products_db';

require('./server/config/mongoose.config');
// remove /server in both requires routes
app.use(cors(), express.json(), express.urlencoded({ extended: true }));

require('./server/routes/product.routes')(app);

app.listen(8000, () => {
    console.log("✅✅Listening at Port 8000✅✅")
})

