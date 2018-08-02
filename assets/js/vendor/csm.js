  $(document).ready( function () {
      // I only have one form on the page but you can be more specific if need be.
      var $form = $('form.js');

      if ( $form.length > 0 ) {
          $form.bind('submit', function ( event ) {
              if ( event ) event.preventDefault();
              // validate_input() is a validation function I wrote, you'll have to substitute this with your own.
              register($form);
          });
      }
  });

  function register($form) {
      $.ajax({
          type: $form.attr('method'),
          url: $form.attr('action'),
          data: $form.serialize(),
          cache       : false,
          dataType    : 'json',
          contentType: "application/json; charset=utf-8",
          error       : function(err) { $('.mce-success-response').hide(); $('.mce-error-response').show();  },
          success     : function(data) {
              $('.mce-error-response').hide(); $('.mce-success-response').show();
          }
      });
  }
