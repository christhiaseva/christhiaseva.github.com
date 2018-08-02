  $(document).ready( function () {
      // I only have one form on the page but you can be more specific if need be.
      var $form = $('form.js');

      if ( $form.length > 0 ) {
          $form.bind('submit', function ( event ) {
              if ( event ) event.preventDefault();
              // validate_input() is a validation function I wrote, you'll have to substitute this with your own.
              $('button', $form).html('Please Wait...');
              register($form);
          });
      }
  });

  function register($form) {
      $.ajax({
          type: $form.attr('method'),
          url: $form.attr('action'),
          data: JSON.stringify($form.serializeArray().reduce(function(a, x) { a[x.name] = x.value; return a; }, {})),
          cache       : false,
          dataType    : 'json',
          processData: false,
          contentType: "application/json; charset=utf-8",
          error       : function(err) {
            $('button', $form).html('Please Try Again');
          },
          success     : function(data) {
            $('button', $form).html('Thanks! We Will Send An Email Shortly');
            $('input, button', $form).attr('disabled', true);
          }
      });
  }
