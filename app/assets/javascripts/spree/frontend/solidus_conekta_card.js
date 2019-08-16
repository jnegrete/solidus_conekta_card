$(document).ready(function() {
  var conektaSuccessResponseHandler = function(token) {
    var $form = $("#checkout_form_payment");
    //Add the token_id in the form
    $form.append($('<input type="hidden" name="conektaTokenId" id="conektaTokenId">').val(token.id));
    $form.get(0).submit(); //Submit
  };

  var conektaErrorResponseHandler = function(response) {
    var $form = $("#checkout_form_payment");
    $form.find(".card-errors").text(response.message_to_purchaser);
  };

  //jQuery generate the token on submit.
  $(function () {
    $("#checkout_form_payment").submit(function(event) {
      var $form = $(this);
      if ($(creditCardPaymentId).prop('checked')) {
        Conekta.Token.create($form, conektaSuccessResponseHandler, conektaErrorResponseHandler);
        return false;
      }
    });
  });
});
