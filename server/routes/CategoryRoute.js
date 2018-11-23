const express = require("express") 
const CategoryRoute = express.Router() 

// Require Post model in our routes module
let Category = require("../models/Category") 

// Defined get data(index or listing) route
CategoryRoute.route("/").get(function (req, res) {
	Category.find(function (err, categories) {
		if (err) {
			console.log("error get data", err) 
		} else {
			res.json(categories) 
		}
	}) 
}) 
module.exports = CategoryRoute 
