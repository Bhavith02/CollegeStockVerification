var Register = require('../model/register_model');
var Labequip = require('../model/labEquip_model');
var Lab = require('../model/lab_model');
//create and save new admins while registering
exports.createR = (req, res)=>{
  //validate request
  if(!req.body){
    res.status(400).send({message:"Content cannot be empty!"});
    return;
  }
  //new admin
  const newRegister = new Register({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    Designation: req.body.Designation,
    email: req.body.email,
    password: req.body.password,
    confirm_password: req.body.password,
    Admin_id: req.body.Admin_id,
    contact_no: req.body.contact_no
  });
  //save admin in database
  newRegister.save(function (err){
    if (err){
      console.log(err);
    }else{
      res.redirect('/');
    }
  });
}

//create and save new admins while adding
exports.createA = (req, res)=>{
  //validate request
  if(!req.body){
    res.status(400).send({message:"Content cannot be empty!"});
    return;
  }

  //new admin
  const newAdmin = new Register({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    Designation: req.body.Designation,
    email: req.body.email,
    password: req.body.password,
    confirm_password: req.body.password,
    Admin_id: req.body.Admin_id,
    contact_no: req.body.contact_no
  })
  //save admin in database
  newAdmin
  .save(newAdmin)
  .then(data =>{
    res.redirect("/admindetails");
  })
  .catch(err =>{
    res.status(500).send({
      message:err.message||"Some error occurred while creating a create operation"
    });
  });
}
//creating lab equipments Details
exports.createL = (req,res)=>{
  if(!req.body){
    res.status(400).send({message:"Content cannot be empty!"});
    return;
  }
  const newLabEquip = new Labequip({
    lab_id: req.body.lab_id,
    item_name: req.body.item_name,
    company_name: req.body.company_name,
    model_no: req.body.model_no,
    doi: req.body.doi,
    condition: req.body.condition
  });
  newLabEquip.save(function (err){
    if (err){
      console.log(err);
    }else{
      res.redirect('/labEqipdetails');
    }
  });
}

//creating lab Details
exports.createLA = (req,res)=>{
  if(!req.body){
    res.status(400).send({message:"Content cannot be empty!"});
    return;
  }
  const newLab = new Lab({
    lab_id: req.body.lab_id,
    lab_name: req.body.lab_name,
    room_no: req.body.room_no,
    block: req.body.block,
    floor: req.body.floor,
    type: req.body.type
  });
  newLab.save(function (err){
    if (err){
      console.log(err);
    }else{
      res.redirect('/LabListing');
    }
  });
}

//retrive and return all Admins /retrive and return a single admin
exports.find = (req, res)=>{
  if(req.query.id){
    const id = req.query.id;

    Register.findById(id)
      .then(data =>{
        if(!data){
          res.status(400).send({message:"Not Found admin with id"+id})
        }else{
          res.send(data)
        }
      })
      .catch(err =>{
        res.status(500).send({message:"Error retriving admin with id"+id});
    });

  }else{
    Register.find()
    .then(admin =>{
      res.send(admin)
    })
    .catch(err =>{
      res.status(500).send({
        message:err.message||"Error occurred while retriving admin details"
      });
    });
  }
}

//retrive and return all lab equipments /retrive and return a single lab equipment
exports.findLE = (req, res)=>{
  if(req.query.id){
    const id1 = req.query.id;

    Labequip.findById(id1)
      .then(data =>{
        if(!data){
          res.status(400).send({message:"Not Found equipment with id"+id1})
        }else{
          res.send(data)
        }
      })
      .catch(err =>{
        res.status(500).send({message:"Error retriving equipment with id"+id1});
    });

  }else{
    Labequip.find()
    .then(labequip =>{
      res.send(labequip)
    })
    .catch(err =>{
      res.status(500).send({
        message:err.message||"Error occurred while retriving equipment details"
      });
    });
  }
}
//retrive and return all lab /retrive and return a single lab
exports.findLA = (req, res)=>{
  if(req.query.id){
    const id2 = req.query.id;

    Labequip.findById(id1)
      .then(data =>{
        if(!data){
          res.status(400).send({message:"Not Found equipment with id"+id2})
        }else{
          res.send(data)
        }
      })
      .catch(err =>{
        res.status(500).send({message:"Error retriving equipment with id"+id2});
    });

  }else{
    Lab.find()
    .then(lab =>{
      res.send(lab)
    })
    .catch(err =>{
      res.status(500).send({
        message:err.message||"Error occurred while retriving equipment details"
      });
    });
  }
}



//Update a new identified admin by admin id
exports.update = (req, res)=>{
  if(!req.body){
    return res
    .status(400)
    .send({message:"Data to be updated cannot be empty"});
  }

  const id = req.params.id;
  Register.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
  .then(data =>{
    if(!data){
      res.status(400).send({message:`Content update admin with ${id}. Maybe admin not found!`})
    }else{
      res.render("update_admin",{admin:data});
    }
  })
  .catch(err =>{
    res.status(500).send({message:"Error Update admin information"});
  });
}

//delete a admin with specified admin id in the request
exports.delete = (req, res)=>{
  const id = req.params.id;

  Register.findByIdAndDelete(id)
  .then(data =>{
    if(!data){
      res.status(400).send({message:`Content Delete admin with ${id}. Maybe admin id is wrong!`})
    }else{
      res.send({
        message:"User was deleted succesfully!"
      })
    }
  })
  .catch(err =>{
    res.status(500).send({message:`Could not delete user with id ${id}.`});
  });
}

//accepts login details and finds the admins in database and redirect to navigation page.
exports.findA = (req, res)=>{
  const username = req.body.email;
  const password = req.body.password;

  Register.findOne({email:username},function(err,foundUser){
    if(!foundUser){
      console.log("Admin not found!");
    }
    else if (err) {
      console.log(err);
    }else{
      if(foundUser){
        if(foundUser.password === password){
          res.redirect("/navigation");
        }
      }
    }
  });
}

// exports.findR = (req,res)=>{
//   Register.find({},function(err,admins){
//   res.render("admindetails",{
//     adminlist:admins
//   });
// });
// }
