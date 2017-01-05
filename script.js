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
      };
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
        pw = $('#password')[0];

    $pwc.on('keyup', function (e) {
      if (e.target.value.length === 0) {
        $pwc.next().html("");
      } else if (e.target.value !== pw.value) {
        $pwc.next().html("Passwords do not match.");
      } else {
        $pwc.next().html("");
        return true;
      }
    });
  },

  checkValidations: function() {
    var pwc = $('#password-conf')[0],
        pw = $('#password')[0],
        textField = $('text-field')[0],
        textArea = $('textarea')[0],
        $submit = $('input[type="submit"]');

    $submit.on('click', function (e) {
      if (pwc.value !== pw.value) {
        var message = $("<p>").text("Passwords must match")
        $(pwc).addClass("error");
        $(pwc).next().after(message);
        $(pw).addClass("error");
        $(pw).next().after(message);
        e.preventDefault()
      }
    });
  }
};

$().ready(function() {
  eventHandlers.addTextFieldValidations();
  eventHandlers.addTextAreaValidations();
  eventHandlers.addPWValidations();
  eventHandlers.addPWConfValidations();
  eventHandlers.checkValidations();
});
