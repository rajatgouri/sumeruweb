const express = require('express');
const path = require('path');
const request = require('request');
const dateformat = require('dateformat');
const filepath = require("../utils/path");
const config = require('../configurations/rest_api_config.json');
const route = express.Router();
const isAuth = require('../middleware/is_auth');

route.get("/",isAuth,(req,res,next)=>{
    
        var userInfo = {username:req.session.userinfo.name, userid:req.session.userinfo.id};
        res.render('page/order',{userinfo:userInfo,page:'/order',pageTitleName:"Orders",pageTitle:"Ajay Soap Mills | order", clients:[]});
    
});


module.exports.routes = route;