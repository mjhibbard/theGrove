const express       = require("express");
const path          = require("path");
const PORT          = process.env.PORT || 3005;
// const app         = express();
// const bodyParser  = require("body-parser");


express()
    //App Config
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    //Routes
    .get('/', (req, res) => res.render('index'))
    .get('/about', (req, res) => res.render('about'))
    .get('/call', (req, res) => res.render('call'))
    .get('/coffee', (req, res) => res.render('coffee'))
    .get('/contact', (req, res) => res.render('contact'))
    .get('/story', (req, res) => res.send("This is our story route."))
    .get('/showcase', (req, res) => res.render('showcase'))
    .get('/splash', (req, res) => res.render('splash'))
    .get('/media', (req, res) => res.redirect('/about'))
    .listen(PORT, (req, res) => console.log("The Grove server is Listening!!"))



// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.set("view engine", "ejs");
// app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '/views'));

// app.get("/", function (req, res){
//     res.render("index");
// });

// app.get("/about", function(req, res){
//     res.render("about");
// });

// app.get("/coffee", function(req, res){
//     res.render("coffee")
// });

// app.get("/showcase", function(req, res){
//     res.render("showcase");
// });

// app.listen(3005, function(){
//     console.log("The Grove server is Listening!!");
// });

//indygrove.church is site and through godaddy.com
//nodemon index.js

//ssh -l username domain -p (port)