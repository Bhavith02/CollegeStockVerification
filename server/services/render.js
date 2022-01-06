const axios = require("axios");

exports.homeRoutes = (req, res)=>{
  res.render("index");
}

exports.admin_login = (req, res)=>{
  res.render("adminlogin");
}

exports.admin_signup = (req, res)=>{
  res.render("adminsignup");
}

exports.others = (req, res)=>{
  res.render("others");
}

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

exports.lab_overview = (req, res)=>{
  res.render("laboverview");
}

exports.navigation = (req, res)=>{
  res.render("navigation");
}

exports.add_lab_equip = (req, res)=>{
  res.render("addlabequip");
}

exports.lab_eqip_details = (req, res)=>{
  //make a get request to
  axios.get('http://localhost:3000/api/labequip')
    .then(function(response){
      res.render("labEqipdetails",{labequiplist:response.data});
    })
    .catch(err=>{
      res.send(err);
    })
}

exports.admindetails = (req, res)=>{
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
