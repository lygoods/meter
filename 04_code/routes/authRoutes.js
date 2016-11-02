// passprot username password authenticate
var express = require('express'),
    passport = require("passport"),
    LocalStrategy = require("passport-local").Strategy,
    app = express();

    var userModel = require('../models/userModel.js'),
        bcrypt = require("bcrypt");

    passport.use(new LocalStrategy(function(name, pwd, done){
        userModel.findOne({name: name})
        .then(function(user){
            if (!user) {
               return one(null, fasle,{alert: "Incorrect username."})
           }

            if(bcrypt.compareSync(pwd, user.pwd)){
                    return done(null, user);
            }else{
                    return one(null, fasle,{alert: "Incorrect password."})
            }
        })
        .catch(function(err){
            return done(err);
        })

    }))

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
             done(err, user);
        });
    });
module.exports= passport;