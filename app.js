require('dotenv').config();
let express = require('express');
let expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const session = require('express-session');
let path = require('path');
const connectDB = require('./server/config/db.js');
const passport = require('passport');
const MongoStore = require('connect-mongo');

const app = express();
const port = 4000 || process.env.PORT;

app.use(session({
    secret: 'your secret key',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI
    }),
    cookie: { maxAge: 10 * 60 * 60 * 1000 }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride("_method"));

connectDB();

app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

app.use(expressLayouts);
app.set('layout','./layouts/main');
app.set('view engine', 'ejs');

app.use('/',require('./server/routes/index'));
app.use('/',require('./server/routes/auth'));
app.use('/',require('./server/routes/dashboard'));

app.get('*',(req,res)=>{
    res.status(404).render('404');
})

app.listen(port,()=>{
    console.log('App listening on port',port);
});