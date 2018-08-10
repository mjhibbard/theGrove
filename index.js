var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser");


//App Config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get("/", function (req, res){
    res.render("index");
});

app.get("/about", function(req, res){
    res.render("about");
});

app.get("/coffee", function(req, res){
    res.render("coffee")
})

app.listen(3000, function(){
    console.log("The Grove server is Listening!!");
});

//nodemon index.js