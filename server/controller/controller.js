//===================REQUIRING ALL THE REQUIRED MODELS===================//

var Register = require('../model/register_model');
var Lab = require('../model/lab_model');
var Labequip = require('../model/labEquip_model');
var Class = require('../model/classroom_model')
var Classequip = require('../model/classEquip_model')

//========================CREATE CALL BACK FUNCTIONS========================//

//-------------create and save new admins while registering---------------//

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

//-----------------create and save new admins while adding---------------//

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

//----------------------creating lab Details-----------------------//

exports.createLA = (req,res)=>{
  if(!req.body){
    res.status(400).send({message:"Content cannot be empty!"});
    return;
  }
  //new lab
  const newLab = new Lab({
    lab_id: req.body.lab_id,
    lab_name: req.body.lab_name,
    room_no: req.body.room_no,
    block: req.body.block,
    floor: req.body.floor,
    type: req.body.type
  })
  //saving lab in database
  newLab
  .save(newLab)
  .then(data =>{
    res.redirect("/LabListing");
  })
  .catch(err =>{
    res.status(500).send({
      message:err.message||"Some error occurred while creating a create operation"
    });
  });
}

//--------------------creating lab equipments Details---------------//

exports.createLE = (req,res)=>{
  if(!req.body){
    res.status(400).send({message:"Content cannot be empty!"});
    return;
  }
  const newLabEquip = new Labequip({
    lab_name:req.body.lab_name,
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

//-------------------create classroom details--------------------//

exports.createCL = (req,res)=>{
  if(!req.body){
    res.status(400).send({message:"Content cannot be empty!"});
    return;
  }
  const newClass = new Class({
    class_id:req.body.class_id,
    room_no: req.body.room_no,
    block: req.body.block,
    branch: req.body.branch,
    floor: req.body.floor,
    type: req.body.type
  });
  newClass.save(function (err){
    if (err){
      console.log(err);
    }else{
      res.redirect('/ClassRoomListing');
    }
  });
}

//----------creating class equipments Details-----------------//

exports.createCE = (req,res)=>{
  if(!req.body){
    res.status(400).send({message:"Content cannot be empty!"});
    return;
  }
  const newClassEquip = new Classequip({
    class_id: req.body.class_id,
    room_no:req.body.room_no,
    item_name: req.body.item_name,
    company_name: req.body.company_name,
    model_no: req.body.model_no,
    doi: req.body.doi,
    condition: req.body.condition
  });
  newClassEquip.save(function (err){
    if (err){
      console.log(err);
    }else{
      res.redirect('/classEquipdetails');
    }
  });
}

//====================FIND CALL BACK FUNCTIONS============================//

//----------accepts login details and finds the admins in database and redirect to navigation page--------------//

exports.find = (req, res)=>{
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

//------retrive and return all Admins /retrive and return a single admin-----//

exports.findA = (req, res)=>{
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

//------retrive and return all lab /retrive and return a single lab--------//

exports.findLA = (req, res)=>{
  if(req.query.id){
    const id = req.query.id;

    Lab.findById(id)
      .then(data =>{
        if(!data){
          res.status(400).send({message:"Not Found equipment with id"+id})
        }else{
          res.send(data)
        }
      })
      .catch(err =>{
        res.status(500).send({message:"Error retriving equipment with id"+id});
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

//-----------retrive and return all lab equipments /retrive and return a single lab equipment----------//

exports.findLE = (req, res)=>{
  if(req.query.id){
    const id = req.query.id;

    Labequip.findById(id)
      .then(data =>{
        if(!data){
          res.status(400).send({message:"Not Found equipment with id"+id})
        }else{
          res.send(data)
        }
      })
      .catch(err =>{
        res.status(500).send({message:"Error retriving equipment with id"+id});
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


exports.findLO = (req,res)=>{
  Labequip.find().distinct('item_name',function(err,data1){
    res.send(data1);
  })
}

// exports.findLO1 = (req1,res1)=>{
//   const result = Labequip.find().distinct('item_name');
//   result.forEach(res2 =>{
//     Labequip.aggregate([{$match:{item_name:res2}},{$group:{_id:"$condition",count:{$sum:1}}},{$sort:{count:-1}}],function(err,data){
//             console.log("hello:",data);
//             res1.send(data);
//     });
//   })
// }

//-----retrive and return all class /retrive and return a single class-----//

exports.findCL = (req, res)=>{
  if(req.query.id){
    const id = req.query.id;

    Class.findById(id)
      .then(data =>{
        if(!data){
          res.status(400).send({message:"Not Found equipment with id"+id})
        }else{
          res.send(data)
        }
      })
      .catch(err =>{
        res.status(500).send({message:"Error retriving equipment with id"+id});
    });

  }else{
    Class.find()
    .then(classroom =>{
      res.send(classroom)
    })
    .catch(err =>{
      res.status(500).send({
        message:err.message||"Error occurred while retriving equipment details"
      });
    });
  }
}

//--retrive and return all lab equipments/retrive and return a single equipemt-/

exports.findCE = (req, res)=>{
  if(req.query.id){
    const id = req.query.id;

    Classequip.findById(id)
      .then(data =>{
        if(!data){
          res.status(400).send({message:"Not Found equipment with id"+id})
        }else{
          res.send(data)
        }
      })
      .catch(err =>{
        res.status(500).send({message:"Error retriving equipment with id"+id});
    });

  }else{
    Classequip.find()
    .then(classequip =>{
      res.send(classequip)
    })
    .catch(err =>{
      res.status(500).send({
        message:err.message||"Error occurred while retriving equipment details"
      });
    });
  }
}

exports.findCO = (req,res)=>{
  Classequip.find().distinct('item_name',function(err,data1){
    res.send(data1);
  })
}
// exports.findCO = (req,res)=>{
//   Classequip.find()
//   .then(classequip =>{
//     res.send(classequip)
//   })
//   .catch(err =>{
//     res.status(500).send({
//       message:err.message||"Error occurred while retriving equipment details"
//     });
//   });
// }


//=======================UPDATE CALL BACK FUNCTIONS=========================//

//--------------Update a new identified admin by admin id---------//

exports.updateA = (req, res)=>{
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

//-------------------update identified LAB-------------------//

exports.updateL =(req,res)=>{
  if(!req.body){
    return res
    .status(400)
    .send({message:"Data to be updated cannot be empty"});
  }

  const id = req.params.id;
  Lab.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
  .then(data =>{
    if(!data){
      res.status(400).send({message:`Content update lab with ${id}. Maybe lab not found!`})
    }else{
      res.send(data)
    }
  })
  .catch(err =>{
    res.status(500).send({message:"Error Update lab information"});
  });
}

//-------------------update identified LAB Equipment------------------//

exports.updateLE =(req,res)=>{
  if(!req.body){
    return res
    .status(400)
    .send({message:"Data to be updated cannot be empty"});
  }

  const id = req.params.id;
  Labequip.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
  .then(data =>{
    if(!data){
      res.status(400).send({message:`Content update lab equipment with ${id}. Maybe equipment not found!`})
    }else{
      res.send(data)
    }
  })
  .catch(err =>{
    res.status(500).send({message:"Error Update lab equipment information"});
  });
}

//-------------------update identified Class-------------------//

exports.updateC =(req,res)=>{
  if(!req.body){
    return res
    .status(400)
    .send({message:"Data to be updated cannot be empty"});
  }

  const id = req.params.id;
  Class.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
  .then(data =>{
    if(!data){
      res.status(400).send({message:`Content update class with ${id}. Maybe class not found!`})
    }else{
      res.send(data)
    }
  })
  .catch(err =>{
    res.status(500).send({message:"Error Update class information"});
  });
}

//--------------------update identified Class equipment------------------//

exports.updateCE =(req,res)=>{
  if(!req.body){
    return res
    .status(400)
    .send({message:"Data to be updated cannot be empty"});
  }

  const id = req.params.id;
  Classequip.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
  .then(data =>{
    if(!data){
      res.status(400).send({message:`Content update class equipment with ${id}. Maybe equipment not found!`})
    }else{
      res.send(data)
    }
  })
  .catch(err =>{
    res.status(500).send({message:"Error Update class equipment information"});
  });
}


//==========================DELETE CALL BACK FUNCTIONS======================//

//--------------delete a admin with specified admin id----------------//

exports.deleteA = (req, res)=>{
  const id = req.params.id;

  Register.findByIdAndDelete(id)
  .then(data =>{
    if(!data){
      res.status(400).send({message:`Content Delete admin with ${id}. Maybe admin id is wrong!`})
    }else{
      res.send({
        message:"Admin was deleted succesfully!"
      })
    }
  })
  .catch(err =>{
    res.status(500).send({message:`Could not delete admin with id ${id}.`});
  });
}

//-----------------delete a lab with specified lab id ----------------//

exports.deleteL = (req, res)=>{
  const id = req.params.id;

  Lab.findByIdAndDelete(id)
  .then(data =>{
    if(!data){
      res.status(400).send({message:`Content Delete Lab with ${id}. Maybe lab id is wrong!`})
    }else{
      res.send({
        message:"Lab was deleted succesfully!"
      })
    }
  })
  .catch(err =>{
    res.status(500).send({message:`Could not delete Lab with id ${id}.`});
  });
}

//------------delete a lab equipment with specified lab equipment----------//

exports.deleteLE = (req, res)=>{
  const id = req.params.id;

  Labequip.findByIdAndDelete(id)
  .then(data =>{
    if(!data){
      res.status(400).send({message:`Content Delete Lab equipment with ${id}. Maybe lab equip id is wrong!`})
    }else{
      res.send({
        message:"Lab equipment was deleted succesfully!"
      })
    }
  })
  .catch(err =>{
    res.status(500).send({message:`Could not delete Lab equipment with id ${id}.`});
  });
}

//-------------delete a Class with specified Class id-----------------//

exports.deleteC = (req, res)=>{
  const id = req.params.id;

  Class.findByIdAndDelete(id)
  .then(data =>{
    if(!data){
      res.status(400).send({message:`Content Delete Class with ${id}. Maybe Class id is wrong!`})
    }else{
      res.send({
        message:"Class was deleted succesfully!"
      })
    }
  })
  .catch(err =>{
    res.status(500).send({message:`Could not delete Class with id ${id}.`});
  });
}

//---------delete a Class equipment with specified Class equipment id---------//

exports.deleteCE = (req, res)=>{
  const id = req.params.id;

  Classequip.findByIdAndDelete(id)
  .then(data =>{
    if(!data){
      res.status(400).send({message:`Content Delete Class equipment with ${id}. Maybe Class equipment id is wrong!`})
    }else{
      res.send({
        message:"Class equipment was deleted succesfully!"
      })
    }
  })
  .catch(err =>{
    res.status(500).send({message:`Could not delete Class equipment with id ${id}.`});
  });
}
