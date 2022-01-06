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
route.get('/admindetails',services.admindetails);
route.get('/LabListing',services.lab_Listing);
route.get('/addlab',services.add_lab);
route.get('/laboverview',services.lab_overview);
route.get('/labEqipdetails',services.lab_eqip_details);
route.get('/navigation',services.navigation);
route.get('/addlabequip',services.add_lab_equip);


//API
route.post('/adminlogin',controller.findA);
// route.get('/admindetails',controller.findR);
route.post('/api/admins',controller.createA);
route.post('/adminsignup',controller.createR);
route.post('/api/labequip',controller.createL);
route.post('/api/lab',controller.createLA);
route.get('/api/admins',controller.find);
route.get('/api/labequip',controller.findLE);
route.get('/api/lab',controller.findLA);
route.put('/api/admins/:id',controller.update);
route.delete('/api/admins/:id',controller.delete);

module.exports = route
