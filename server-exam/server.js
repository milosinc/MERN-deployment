const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors(),express.json(),express.urlencoded({ extended: true }));

require('./config/mongooseconfig'); 
require('./routes/pet.routes')(app)

const ProductRoutes = require("./routes/pet.routes");
ProductRoutes(app);

app.listen(8000, () => {console.log("HELLOW, Listening at Port 8000")})
