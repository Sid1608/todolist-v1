const express = require("express");
const bodyParser = require("body-parser");
const date= require(__dirname+"/date.js");
// console.log(date());
const app = express();

const Items=["Buy Food", "Cook Food", "Eat Food"]; 
const workItems=[];

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));//tell express to serve up this public folder as a static resource.
app.set("view engine", "ejs");

 app.get("/", function (req, res) {
	let day=date.getDate();
	res.render("list", { 
		listTitle: day,
		newListItems: Items
	});
});

app.post("/",function(req,res){
	//console.log(req.body); 
	let item=req.body.newItem;
	if(req.body.list === "Work"){
		workItems.push(item);
		res.redirect("/work");
	}
	else{
		Items.push(item);
		// console.log(newItem);
		// res.render("list",{newListItems: newItem});//this uses view engine to render a particular page
		res.redirect("/");
	}
});

app.get("/work",function(req,res){
	res.render("List",{
		listTitle:"Work List",
		newListItems:workItems
	});
});

// app.post("/work",function(req,res){
// 	let item=req.body.newItem;
// 	workItems.push(item);
// 	res.render("/work");
// })
app.get("/about",function(req,res){
	res.render("about");
});
app.listen(3000, function () {
	console.log("Server started on port 3000");
});
/*use res.write() to send multiple pieces of data*/