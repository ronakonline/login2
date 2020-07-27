var express = require('express');
var hbs = require('hbs');
var route = require('./routes/user');
var path = require('path');
var db = require('./models');
var bodyparser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const app = express();

app.use(session({
    secret: 'geeksforgeeks',
    saveUninitialized: true,
    resave: true
}));

app.use(flash());


app.use(bodyparser.urlencoded({ extended: false }))



app.set('view engine', 'hbs')
app.set('views', 'views')

const publicpath = path.join(__dirname, './assets');

app.use(express.static(publicpath))

app.use('/', route);

// db.sequelize.sync().then(() => {
//     app.listen(3000, () => {
//         console.log('server is running!');
//     })
// })


app.listen(3000, () => {
    console.log('server is running!');
})