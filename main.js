$(document).ready(function() {
$('form[id="registration"]').validate({


    rules: {
      Nom: {
      maxlength: 20,
      required: true
      },
      Prenom: {
        maxlength: 20,
        required: true
      },
      Date_de_naissance: {
      required: true
      },
      Email: {
      email: true
    },
      Telephone: {
      maxlength: 10 ,
      required: true
      },
      Frequence: {
        required: true,
        min: 0,
        max: 30,

      }
        },
    // Specify validation error messages
    messages : {
    Nom: {
    maxlength: 'Name should be at max 20',
    required: 'Please enter your name'
    },
    Prenom: {
    required: 'Please enter your last name',
    maxlength: 'Name should be at max 20'
    },
    Date_de_naissance: {
    required: 'Please enter your date of birth'
    },
    Email: {
    email: 'The email should be in the format: abc@domain.tld'
    },
    Telephone: {
    max: 'your phone number should not be more than 10 numbers'
    },
    Frequence: {
      required: 'Please enter the frequence',
      min: 'the frequence should not be less then 0',
      max: 'the frequence should not be more than 30'

    }
  },
  submitHandler: function(form) {
  form.submit();}
});
});
