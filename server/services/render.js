const axios = require("axios");

//==============CALL BACK FUNCTIONS PASSED TO ROUTES FOLDER ===============//

//--------home and navigation call back functions----------//

exports.homeRoutes = (req, res)=>{
  res.render("index");
}

exports.navigation = (req, res)=>{
  res.render("navigation");
}


//---------admin related call back functions--------------//

exports.admin_login = (req, res)=>{
  res.render("adminlogin");
}

exports.admin_signup = (req, res)=>{
  res.render("adminsignup");
}

exports.admin_details = (req, res)=>{
  //make a get request to /api/admins
  axios.get('http://localhost:3000/api/admins')
    .then(function(response){
      res.render("admindetails",{adminlist:response.data});
    })
    .catch(err=>{
      res.send(err);
    })
}

exports.add_admin = (req, res)=>{
  res.render("addadmin");
}

exports.update_admin = (req, res)=>{
  axios.get('http://localhost:3000/api/admins',{params:{id:req.query.id}})
  .then(function(admindata){
    res.render("update_admin",{admin:admindata.data});
  })
  .catch(err=>{
    res.send(err);
  })
}


//--------------lab and equipment related call back functions----------------//

exports.lab_Listing = (req, res)=>{
  //make a get request to
  axios.get('http://localhost:3000/api/lab')
    .then(function(response){
      res.render("LabListing",{lablist:response.data});
    })
    .catch(err=>{
      res.send(err);
    })
}

exports.add_lab = (req, res)=>{
  res.render("addlab");
}

exports.update_lab=(req,res)=>{
  axios.get('http://localhost:3000/api/lab',{params:{id:req.query.id}})
    .then(function(response){
      res.render("updatelab",{lablist:response.data});
    })
    .catch(err=>{
      res.send(err);
    })
}

exports.lab_overview = (req, res)=>{
  res.render("laboverview");
}

exports.lab_eqip_details = (req, res)=>{
  //make a get request to server to load lab equipment details page
  axios.get('http://localhost:3000/api/labequip')
    .then(function(response){
      res.render("labEqipdetails",{labequiplist:response.data});
    })
    .catch(err=>{
      res.send(err);
    })
}

exports.add_lab_equip = (req, res)=>{
  res.render("addlabequip");
}

exports.update_lab_equip = (req, res) =>{
  axios.get('http://localhost:3000/api/labequip',{params:{id:req.query.id}})
    .then(function(response){
      res.render("updatelabequip",{labequiplist:response.data});
    })
    .catch(err=>{
      res.send(err);
    })
}


//------------classroom and equipment related call back functions----------//

exports.class_room_listing = (req, res)=>{
  //make a get request to
  axios.get('http://localhost:3000/api/classroom')
    .then(function(response){
      res.render("ClassRoomListing",{classlist:response.data});
    })
    .catch(err=>{
      res.send(err);
    })
}

exports.add_classroom = (req, res)=>{
  res.render("addClassroom");
}

exports.update_class=(req,res)=>{
  axios.get('http://localhost:3000/api/classroom',{params:{id:req.query.id}})
    .then(function(response){
      res.render("updateclass",{classlist:response.data});
    })
    .catch(err=>{
      res.send(err);
    })
}

exports.class_overview = (req, res)=>{
  res.render("classoverview");
}

exports.class_equip_details = (req, res)=>{
  //make a get request to
  axios.get('http://localhost:3000/api/classequip')
    .then(function(response){
      res.render("classEquipdetails",{classequiplist:response.data});
    })
    .catch(err=>{
      res.send(err);
    })
}

exports.add_class_equip = (req, res)=>{
  res.render("addclassequipments");
}

exports.update_class_equip = (req, res) =>{
  axios.get('http://localhost:3000/api/classequip',{params:{id:req.query.id}})
    .then(function(response){
      res.render("updateclassequip",{classequiplist:response.data});
    })
    .catch(err=>{
      res.send(err);
    })
}


//-------------------others view related call back functions----------------//

exports.others = (req, res)=>{
  res.render("others");
}

exports.other_lab = (req, res)=>{
  //make a get request to server to load lab details page
  axios.get('http://localhost:3000/api/lab')
    .then(function(response){
      res.render("otherLab",{lablist:response.data});
    })
    .catch(err=>{
      res.send(err);
    })
}

exports.other_lab_equip = (req, res)=>{
  //make a get request to server to load lab equipment details page
  axios.get('http://localhost:3000/api/labequip')
    .then(function(response){
      res.render("otherLabequip",{labequiplist:response.data});
    })
    .catch(err=>{
      res.send(err);
    })
}

exports.other_class = (req, res)=>{
  axios.get('http://localhost:3000/api/classroom')
    .then(function(response){
      res.render("otherClass",{classlist:response.data});
    })
    .catch(err=>{
      res.send(err);
    })
}

exports.other_class_equip = (req, res)=>{
  axios.get('http://localhost:3000/api/classequip')
    .then(function(response){
      res.render("otherClassequip",{classequiplist:response.data});
    })
    .catch(err=>{
      res.send(err);
    })
}

exports.other_laboverview = (req, res)=>{
  res.render("Othlaboverview");
}

exports.other_classoverview = (req, res)=>{
  res.render("Othclassoverview");
}
