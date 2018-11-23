const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const ProductRoute = express.Router();
const axios = require("axios"); 
var mongoose = require("mongoose");
const fs = require("fs");
app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({
	extended: true
})); 
let Product = require("../models/Product");
 // Defined get data(index or listing)  
ProductRoute.route("/findByCategory/:category").get(function (req, res) {
   
   Product.find({
  "category": req.params.category   
   }, function(err, prod){ 
     if(err){
    console.log("error", err); 
	}
	else {
		res.json(prod);
 	}
   })
});
ProductRoute.route("/").get(function (req, res) {
	Product.find(function (err, products) {
		if (err) {
			console.log(err);
		} else {
			res.json(products);
		}
	});
});

ProductRoute.route("/findById/:id").get(function (req, res) {
 	Product.findById(req.params.id, function (err, prodid) {
		if(err){
			console.log(err); 
		}
		else {  
			console.log("  ff", prodid); 
 			 res.json(prodid); 
 		}
	})
});

// Defined delete | remove | destroy route
ProductRoute.route("/delete/:id").get(function (req, res) {
	//Deleting image from folder when deleting product. 
	Product.findById(req.params.id, function (err, product) {}).then((res) => {
			console.log("ress", res.img);
			var path = res.img;
			fs.unlink(`public/uploads/${path}`, (err) => {
				if (err) throw err;
				console.log(" image  was deleted");
			});
		})
		.catch((err) => {
			console.log("error", err)
		})
	Product.findByIdAndRemove({
		_id: req.params.id
	}, function (err, product) {
		if (err) res.json(err);
		else res.json(req.params.id);
	});
});

ProductRoute.route("/update/").get(function (req, res) {
	var product = JSON.parse(req.query.product)
	Product.findByIdAndUpdate({
		_id: product.product._id
	}, {
		$set: {
			label: product.product.label,
			description: product.product.description, 
			color: product.product.color, 
			TVA: product.product.TVA, 
			quantity: product.product.quantity, 
			reduction:product.product.reduction, 
			pricettc: product.product.pricettc
		}
	}, {
		new: true
	}, function (err, product) {
		if (err) res.json(err);
		else res.json(product.product._id);
	});
});




module.exports = ProductRoute;
