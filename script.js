var eventHandlers = {
  textFieldValidation: function(){
    $("#text-field").change(function(e){
      console.log(e.target);
    });
  }
};

$().ready(function() {
  eventHandlers.textFieldValidation()
});
