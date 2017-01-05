var validations = {
  textFieldMax: 32,
  textFieldMin: 4,
  textAreaMax: 140,
  textAreaMin: 4,
  pwMax: 16,
  pwMin: 6
}

var eventHandlers = {
  addTextFieldValidations: function(){
    var $tf = $('#text-field');

    $tf.attr('maxlength', String( validations.textFieldMax ))
       .attr('minlength', String( validations.textFieldMin ));

    $tf.on('keyup', function(e){
      var left = validations.textFieldMax - e.target.value.length;

      if (left === validations.textFieldMax) {
        $tf.next().html("");
      } else {
        $tf.next().html(String(left) + " characters left");
      }
    });
  },

  addTextAreaValidations: function(){
    var $ta = $('textarea');

    $ta.attr('maxlength', String( validations.textAreaMax ))
       .attr('minlength', String( validations.textAreaMin ));

    $ta.on('keyup', function(e){
      var left = validations.textAreaMax - e.target.value.length;

      if (left === validations.textAreaMax) {
        $ta.next().html("");
      } else {
        $ta.next().html( String(left) + " characters left");
      }
    });
  },

  addPWValidations: function(){
    var $pw = $('#password');

    $pw.attr('maxlength', String( validations.pwMax ))
       .attr('minlength', String( validations.pwMin ));

    $pw.on('keyup', function(e){
      var left = validations.pwMax - e.target.value.length;

      if (left === validations.pwMax) {
        $pw.next().html("");
      } else {
        $pw.next().html( String(left) + " characters left");
      }
    });
  },

  addPWConfValidations: function() {
    var $pwc = $('#password-conf'),
        $pw = $('#password');

    $pwc.on('keyup', function (e) {
      console.log(e.target.value);
      console.log($pw.value);
      if (e.target.value.length === 0) {
        $pwc.next().html("");
      } else if (e.target.value !== $pw.value) {
        $pwc.next().html("Passwords do not match.");
      } else {
        $pwc.next().html("");
      }
    });
  }
};

$().ready(function() {
  eventHandlers.addTextFieldValidations();
  eventHandlers.addTextAreaValidations();
  eventHandlers.addPWValidations();
  eventHandlers.addPWConfValidations();
});
