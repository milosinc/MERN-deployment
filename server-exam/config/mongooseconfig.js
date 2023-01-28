/*mongooseconfig.js*/
const mongoose = require('mongoose');
 
mongoose.connect('mongodb://127.0.0.1:27017/pets', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => 
        console.log('CONNECTED ;]'))
    .catch(err => 
        console.log('cant connect to db u;w;u', err));