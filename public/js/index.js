
//=================DATA ADDITION CONFIRMATION===================//


$("#add_admin").submit(function(event){
  alert("Data inserted Successfully...");
})

$("#add_lab").submit(function(event){
  alert("Data inserted Successfully...");
})

$("#add_lab_equip").submit(function(event){
  alert("lab equipment inserted Successfully...");
})

$("#add_classroom").submit(function(event){
  alert("Classrom inserted Successfully...");
})

$("#add_class_equip").submit(function(event){
  alert("Classrom equipment inserted Successfully...");
})



//=====================UPDATE OPERATION AND CONFIRMATION=====================//

//------------UPDATE ADMIN DETAILS---------------//

$("#update_admin").submit(function(event){
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();
  var data = {}

  $.map(unindexed_array,function(n,i){
    data[n['name']]=n['value']
  })

  console.log(data);

  var request = {
    "url" : `http://localhost:3000/api/admins/${data.id}`,
    "method" : "PUT",
    "data":data
  }

  $.ajax(request).done(function(response){
    alert("Data updated Successfully!");
  })
})

//-------------------UPDATE LAB DETAILS-----------------------//

$("#update_lab").submit(function(event){
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();
  var data = {}

  $.map(unindexed_array,function(n,i){
    data[n['name']]=n['value']
  })

  var request = {
    "url" : `http://localhost:3000/api/lab/${data.id}`,
    "method" : "PUT",
    "data":data
  }

  $.ajax(request).done(function(response){
    alert("Data updated Successfully!");
  })
})


//------------------UPDATE LAB EQUIPMENT DETAILS-----------------//

$("#update_lab_equip").submit(function(event){
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();
  var data = {}

  $.map(unindexed_array,function(n,i){
    data[n['name']]=n['value']
  })

  var request = {
    "url" : `http://localhost:3000/api/labequip/${data.id}`,
    "method" : "PUT",
    "data":data
  }

  $.ajax(request).done(function(response){
    alert("Data updated Successfully!");
  })
})


//---------------------UPDATE CLASS DETAILS-----------------//

$("#update_class").submit(function(event){
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();
  var data = {}

  $.map(unindexed_array,function(n,i){
    data[n['name']]=n['value']
  })

  var request = {
    "url" : `http://localhost:3000/api/classroom/${data.id}`,
    "method" : "PUT",
    "data":data
  }

  $.ajax(request).done(function(response){
    alert("Data updated Successfully!");
  })
})


//------------------UPDATE CLASS EQUIPMENT DETAILS--------------//

$("#update_class_equip").submit(function(event){
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();
  var data = {}

  $.map(unindexed_array,function(n,i){
    data[n['name']]=n['value']
  })

  var request = {
    "url" : `http://localhost:3000/api/classequip/${data.id}`,
    "method" : "PUT",
    "data":data
  }

  $.ajax(request).done(function(response){
    alert("Data updated Successfully!");
  })
})


//=====================DELETE OPERATION AND CONFIRMATION=====================//

//---------------DELETING ADMIN------------------//

if(window.location.pathname == "/admindetails"){
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function(){
    var id = $(this).attr("data-id")

    var request = {
      "url" : `http://localhost:3000/api/admins/${id}`,
      "method" : "DELETE"
    }

    if(confirm("Do you really want to delete this record?")){
      $.ajax(request).done(function(response){
        alert("Data deleted Successfully!");
        location.reload();
      })
    }
  })
}

//------------------DELETING LAB------------------//

if(window.location.pathname == "/LabListing"){
  $ondelete = $(".labtable tbody td a.delete");
  $ondelete.click(function(){
    var id = $(this).attr("data-id")

    var request = {
      "url" : `http://localhost:3000/api/lab/${id}`,
      "method" : "DELETE"
    }

    if(confirm("Do you really want to delete this lab details?")){
      $.ajax(request).done(function(response){
        alert("Data deleted Successfully!");
        location.reload();
      })
    }
  })
}

//-----------------DELETING LAB EQUIPMENT---------------//

if(window.location.pathname == "/labEqipdetails"){
  $ondelete = $(".labtable tbody td a.delete");
  $ondelete.click(function(){
    var id = $(this).attr("data-id")

    var request = {
      "url" : `http://localhost:3000/api/labequip/${id}`,
      "method" : "DELETE"
    }

    if(confirm("Do you really want to delete this lab equipment details?")){
      $.ajax(request).done(function(response){
        alert("Data deleted Successfully!");
        location.reload();
      })
    }
  })
}

//----------------DELETING CLASSROOM-------------------//

if(window.location.pathname == "/ClassRoomListing"){
  $ondelete = $(".labtable tbody td a.delete");
  $ondelete.click(function(){
    var id = $(this).attr("data-id")

    var request = {
      "url" : `http://localhost:3000/api/classroom/${id}`,
      "method" : "DELETE"
    }

    if(confirm("Do you really want to delete this Class details?")){
      $.ajax(request).done(function(response){
        alert("Data deleted Successfully!");
        location.reload();
      })
    }
  })
}

//--------------DELETING CLASSROOM EQUIPMENT---------------//

if(window.location.pathname == "/classEquipdetails"){
  $ondelete = $(".labtable tbody td a.delete");
  $ondelete.click(function(){
    var id = $(this).attr("data-id")

    var request = {
      "url" : `http://localhost:3000/api/classequip/${id}`,
      "method" : "DELETE"
    }

    if(confirm("Do you really want to delete this class equipment details?")){
      $.ajax(request).done(function(response){
        alert("Data deleted Successfully!");
        location.reload();
      })
    }
  })
}
