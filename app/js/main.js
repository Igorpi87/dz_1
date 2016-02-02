
(function  ($) {
	$(document).ready(function() {
        console.log('ready');
    });

// DOM Ready
      /*  $(function() {

            // Binding a click event
            // From jQuery v.1.7.0 use .on() instead of .bind()
            $('#my-button').bind('click', function(e) {

                // Prevents the default action to be triggered. 
                e.preventDefault();

                // Triggering bPopup when click event is fired
                $('#element_to_pop_up').bPopup();

            });

        });    */
 $(function() {
            $('#my-button').bind('click', function(e) {
                e.preventDefault();
                $('#element_to_pop_up').bPopup({
                    fadeSpeed: 'slow', //can be a string ('slow'/'fast') or int
                    followSpeed: 1500, //can be a string ('slow'/'fast') or int
                    modalColor: 'black'
                       
                });
            });
 });
$('.close-button').on('click', function(){
    $('#element_to_pop_up').bPopup().close();
});

}(jQuery))