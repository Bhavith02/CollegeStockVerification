const express = require("express");
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');

route.get('/',services.homeRoutes);
route.get('/adminlogin',services.admin_login);
route.get('/adminsignup',services.admin_signup);
route.get('/others',services.others);
route.get('/addadmin',services.add_admin);
route.get('/update_admin',services.update_admin);
route.get('/admindetails',services.admindetails)

//API
route.post('/adminlogin',controller.findA);
// route.get('/admindetails',controller.findR);
route.post('/api/admins',controller.createA);  
route.post('/adminsignup',controller.createR);
route.get('/api/admins',controller.find);
route.put('/api/admins/:id',controller.update);
route.delete('/api/admins/:id',controller.delete);

module.exports = route
