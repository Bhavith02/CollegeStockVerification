

$("#add_admin").submit(function(event){
  alert("Data inserted Successfully...");
})

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

if(window.location.pathname == "/admindetails"){
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function(){
    var id = $(this).attr("data-id")

    var request = {
      "url" : `http://localhost:3000/api/admins/${id}`,
      "method" : "DELETE"
    }

    if(confirm("Do you reallu want to delete this record?")){
      $.ajax(request).done(function(response){
        alert("Data deleted Successfully!");
        location.reload();
      })
    }
  })
}
