var validations = {
  textFieldMax: 32,
  textFieldMin: 4,
  textAreaMax: 140,
  textAreaMin: 4,
  pwMax: 16,
  pwMin: 6
}

var formGroup = {
  updateBadge: function( jQObj, text ) {
    jQObj.parent().find('.badge').html(text);
  },

  updateMessage: function( jQObj, text ) {
    jQObj.parent().find('.message').html(text);
  }
}

var checkPWValidations = function($pwc, $pw) {
  if ($pwc[0].value !== $pw[0].value) {
    var message = "Passwords must match";

    $pwc.addClass("error");
    formGroup.updateMessage($pwc, message);
    $pw.addClass("error");
    formGroup.updateMessage($pw, message);

    return false;
  } else {
    return true;
  }
}

var checkTextField = function ( $textField ) {
  var message,
      tooShort = $textField[0].value < validations.textFieldMin,
      tooLong = $textField[0].value > validations.textFieldMax;

  if (tooShort || tooLong) {
    message = tooShort ? "Text is too short." : "Text is too long.";

    $textField.addClass("error");
    formGroup.updateMessage($textField, message);

    return false;
  } else {
    return true;
  }
}

var checkTextArea = function ( $textArea ) {
  var message,
      tooShort = $textArea[0].value < validations.textAreaMin,
      tooLong = $textArea[0].value > validations.textAreaMax;

  if (tooShort || tooLong) {
    message = tooShort ? "Text is too short." : "Text is too long.";

    $textArea.addClass("error");
    formGroup.updateMessage($textArea, message);

    return false;
  } else {
    return true;
  }
}

var eventHandlers = {
  addTextFieldValidations: function(){
    var $tf = $('#text-field');

    $tf.attr('maxlength', String( validations.textFieldMax ))
       .attr('minlength', String( validations.textFieldMin ));

    $tf.on('keyup', function(e){
      var left = validations.textFieldMax - e.target.value.length;

      if (left === validations.textFieldMax) {
        formGroup.updateBadge($tf, "");
      } else {
        formGroup.updateBadge($tf, String(left) + " characters left");
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
        formGroup.updateBadge($ta, "");
      } else {
        formGroup.updateBadge($ta, String(left) + " characters left");
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
        formGroup.updateBadge($pw, "");
      } else {
        formGroup.updateBadge($pw, String(left) + " characters left");
      }
    });
  },

  addPWConfValidations: function() {
    var $pwc = $('#password-conf'),
        pw = $('#password')[0];

    $pwc.on('keyup', function (e) {
      if (e.target.value.length === 0) {
        formGroup.updateBadge($pwc, "");
      } else if (e.target.value !== pw.value) {
        formGroup.updateBadge($pwc, "Passwords do not match.");
      } else {
        formGroup.updateBadge($pwc, "");
        return true;
      }
    });
  },

  checkValidations: function() {
    var $pwc = $('#password-conf'),
        $pw = $('#password'),
        $textField = $('#text-field'),
        $textArea = $('textarea'),
        $submit = $('input[type="submit"]');

    $submit.on('click', function (e) {
      var tf = checkTextField( $textField ),
          ta = checkTextArea( $textArea ),
          pw = checkPWValidations( $pwc, $pw );

      if (!pw || !tf || !ta) {
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
