$(document).ready(function(){
    $("form").submit(function(evt){	 
        evt.preventDefault();
        var formData = new FormData($(this)[0]);
     $.ajax({
         url: '/upload',
         type: 'POST',
         data: formData,
         cache: false,
         contentType: false,
         enctype: 'multipart/form-data',
         processData: false,
         success: function (response) {
          $("#disResult").text(response.Uploaded);
         },
         error  : function(error){
             $("#disResult").text (error.responseJSON.data);
         }
     });
     return false;
   });
});