const express = require("express");
const UserRoute = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const mongoose = require( "mongoose")
const jwt = require("jsonwebtoken");
const passport = require("passport");
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");
const User = require("../models/User");

UserRoute.post("/register", function(req, res) {
  const { errors, isValid } = validateRegisterInput(req.body);
    if(!isValid) {
        return res.status(400).json(errors);
    }
    User.findOne({
        email: req.body.email
    }).then(user => {
        if(user) {
            return res.status(400).json({
                email: "Email already exists"
            });
        }
        else {
            const avatar = gravatar.url(req.body.email, {
                s: "200",
                r: "pg",
                d: "mm"
            });
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                fullname: req.body.fullname,
                tel: req.body.tel,
                country: req.body.country,
                addr: req.body.addr,
                shippingaddr: req.body.shippingaddr,
                status: false,
                shoppingcard : [] ,
                wishlist : [] , 
                 avatar
            });

         bcrypt.genSalt(10, (err, salt) => {
                if(err) console.error("There was an error", err);
                else {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) console.error("There was an error", err);
                        else {
                            newUser.password = hash;
                            newUser
                                .save()
                                .then(user => {
                                    res.json(user)
                                }); 
                        }
                    });
                }
            });
        }
    });
});
UserRoute.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    if(!isValid) {
        console.log("fddd")
        return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;
  User.findOne({email})
        .then(user => {
            if(!user) {
                return res.status(404).json({ email : "User not found"});
            }
            if(user.status === false ){
                return res.status(404).json({ email : "Account still not confirmed by admin"});
            } 
            bcrypt.compare(password, user.password)
                    .then(isMatch => {
                        if(isMatch) {
                            const payload = {
                               id: user.id,
                               name: user.name, 
                               fullname: user.fullname,
                               email: user.email,
                               password: user.password, 
                               tel: user.tel,  
                               country: user.country,  
                               addr: user.addr,  
                               shippingaddr: user.shippingaddr,
                               avatar: user.avatar,  
                               date: user.date, 
                               shoppingcard: user.shoppingcard,
                               wishlist: user.wishlist
                            }
                            jwt.sign(payload, "secret", {
                                expiresIn: 3600
                            }, (err, token) => {
                                if(err) console.error("There is some error in token", err);
                                else {
                                    res.json({
                                        success: true,
                                        token: `Bearer ${token}`
                                    });
                                 }
                            });
                        }
                        else {
                            errors.password = "Incorrect Password";
                            return res.status(400).json(errors);
                        }
                  });
        });
});
UserRoute.get("/me", passport.authenticate("jwt", { session: false }), (req, res) => {
    return res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    });
})

UserRoute.route("/").get(function (req, res) {
	User.find(function (err, users) {
		if (err) {
			console.log("error get data", err) 
		} else {
			res.json(users) 
		}
    });  
}); 

UserRoute.route("/updateShoppingList/").get(function (req, res) {
   console.log("dd", req.query.idProd ); 
	User.findByIdAndUpdate({
		_id:  req.query.idUser 
	}, {
		$push: {
			shoppingcard :req.query.idProd  
          }
 	}, {
		new: true
	}, function (err, user ) {
		if (err) res.json(err);
		else  res.json(user) ;
	});
});

UserRoute.route("/updateWishList/").get(function (req, res) {
 	User.findByIdAndUpdate({
		_id:  req.query.idUser 
	}, {
		$push: {
			wishlist :req.query.idProd  
          }
 	}, {
		new: true
	}, function (err, user ) {
		if (err) res.json(err);
		else  res.json(user) ;
	});
});

UserRoute.route('/updateProfile/').get(function (req, res) {
   
    User.findByIdAndUpdate({
		_id: req.query.idUser 
	}, {
		$set: {
			email: req.query.newEmail  
		}
	}, {
		new: true
	}, function (err, user) {
		if (err) res.json(err);
		else res.json(user);
	});
});
UserRoute.route('/deleteWishlist/').get(function(req, res){
    User.findByIdAndUpdate({
		_id: req.query.idUser 
	}, {
		$set: {
		  wishlist : []  
		}
	}, {
		new: true
	}, function (err, user) {
		if (err) res.json(err);
		else res.json(user);
	});
})
module.exports = UserRoute; 