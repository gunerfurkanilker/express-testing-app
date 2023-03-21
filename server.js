const app = require('./app')
const port = 3000;
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

let DB = process.env.DB_CONNECTION_STRING.replace('<password>', process.env.DB_CONNECTION_PASSWORD);
DB = DB.replace('<db_name>',process.env.DB_NAME);

mongoose.connect(DB).then(con => {
    //console.log(con);
});





app.listen(port,() => {
    console.log(`App is running on port: ${port}`);
})
