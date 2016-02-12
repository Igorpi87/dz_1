var contactModule = (function(){

	var initial = function () {
		_setUpListeners();
	};

	var _setUpListeners = function () {
		$('#contact-me').on('submit', _submitForm); // отправка формы "связаться со мной"
	};



	var _submitForm = function (e) {
		console.log("work with contact form");
		e.preventDefault();
		var form = $(this),          
	      url = 'actions/send-mail.php',
	      defObject = _ajaxForm(form, url);

	    /*  if (defObject) {
	        defObject.done(function(ans) {
	          var mes = ans.mes,
	              status = ans.status;

	          if ( status === 'OK'){
	            form.trigger('reset');
	            form.find('.success-mes').text(mes).show();           
	          } else{
	            form.find('.error-mes').text(mes).show();
	          }
	        });
	      }*/
	};

	var _ajaxForm = function (form, url) {
	      if (!validator.validationForm(form)) return false;  // Возвращает false, если не проходит валидацию 
	      var data = form.serialize(); // собираем данные из формы в объект data

	      /*return $.ajax({ // Возвращает Deferred Object
	        type: 'POST',
	        url: url,
	        dataType : 'JSON',
	        data: data
	      }).fail( function(ans) {
	        console.log('Проблемы в PHP');
	        form.find('.error-mes').text('На сервере произошла ошибка').show();
	      });*/
	    };

	return {
		init: initial
	};

})();

contactModule.init();