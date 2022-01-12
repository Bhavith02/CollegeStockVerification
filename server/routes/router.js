const express = require("express");
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');

//========GETTING HOME AND NAVIGATION PAGES FROM SERVICES FOLDER==========//

route.get('/',services.homeRoutes);
route.get('/navigation',services.navigation);

//==========GETTING ADMIN RELATED PAGES FROM SERVICES FOLDER==============//

route.get('/adminlogin',services.admin_login);
route.get('/adminsignup',services.admin_signup);
route.get('/admindetails',services.admin_details);
route.get('/addadmin',services.add_admin);
route.get('/update_admin',services.update_admin);

//=====GETTING LAB AND LAB EQUIPMENT RELATED PAGES FROM SERVICES FOLDER======//

route.get('/LabListing',services.lab_Listing);
route.get('/addlab',services.add_lab);
route.get('/updatelab',services.update_lab);
route.get('/laboverview',services.lab_overview);
route.get('/labEqipdetails',services.lab_eqip_details);
route.get('/addlabequip',services.add_lab_equip);
route.get('/updatelabequip',services.update_lab_equip);

//=GETTING CLASSROOM AND CLASS EQUIPMENT RELATED PAGES FROM SERVICES FOLDER=//

route.get('/ClassRoomListing',services.class_room_listing);
route.get('/addClassroom',services.add_classroom);
route.get('/updateclass',services.update_class);
route.get('/classoverview',services.class_overview);
route.get('/classEquipdetails',services.class_equip_details);
route.get('/addclassequipments',services.add_class_equip);
route.get('/updateclassequip',services.update_class_equip);

//=========GETTING OTHERS VIEWING RELATED PAGES FROM SERVICES FOLDER=======//

route.get('/others',services.others);


//CREATE OPERATION(creating tables) CALL BACK FUNCTION FROM CONTROLLER FOLDER//

route.post('/adminsignup',controller.createR);
route.post('/api/admins',controller.createA);
route.post('/api/lab',controller.createLA);
route.post('/api/labequip',controller.createLE);
route.post('/api/classroom',controller.createCL);
route.post('/api/classequip',controller.createCE);

//=======FIND OPERATION(finding records) C.B.F FROM CONTROLLER FOLDER========//

route.post('/adminlogin',controller.find);
route.get('/api/admins',controller.findA);
route.get('/api/lab',controller.findLA);
route.get('/api/labequip',controller.findLE);
route.get('/api/classroom',controller.findCL);
route.get('/api/classequip',controller.findCE);

//=UPDATE OPERATION(updating particular record) C.B.F FROM CONTROLLER FOLDER=//

route.put('/api/admins/:id',controller.updateA);
route.put('/api/lab/:id',controller.updateL);
route.put('/api/labequip/:id',controller.updateLE);
route.put('/api/classroom/:id',controller.updateC);
route.put('/api/classequip/:id',controller.updateCE);

//=DELETE OPERATION(deleting particular record) C.B.F FROM CONTROLLER FOLDER=//

route.delete('/api/admins/:id',controller.deleteA);
route.delete('/api/lab/:id',controller.deleteL);
route.delete('/api/labequip/:id',controller.deleteLE);
route.delete('/api/classroom/:id',controller.deleteC);
route.delete('/api/classequip/:id',controller.deleteCE);

module.exports = route
