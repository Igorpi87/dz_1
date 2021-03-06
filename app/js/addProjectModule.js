var contactModule = (function(){

	var initial = function () {
		_setUpListeners();
	};

	var _setUpListeners = function () {
		$('#element_to_pop_up').on('submit', _addProjects); // отправка формы "связаться со мной"
		$('#contact-me').on('reset', _resetForm);
		$('form').on('keydown', '.inValidBorderColor', _removeError);
	};
    var _removeError = function () {
    	$(this).removeClass('inValidBorderColor');
    };
    var _resetForm = function (e) {
    	console.log("ClearForm");
    	e.preventDefault();
    	var form = $(this);
    		form.find('.inValidBorderColor').removeClass('inValidBorderColor');
    		form.find('input, textarea').not('input[type="file"], input[type="hidden"], input[type="submit"]').trigger('hideToolTip');
    		form.find('input, textarea').not('input[type="file"], input[type="hidden"], input[type="submit"]').val('');
    };

	// var _addProjects = function (e) {
	// 	//console.log("work with contact form");
	// 	e.preventDefault();
		// var form = $(this),          
	 //        url = 'add-project.php';
	 //     if (!validator.validationForm(form)) return false;  // Возвращает false, если не проходит валидацию 
	 //       defObject = _ajaxForm(form, url);

	 //     if (defObject) {
	 //        defObject.done(function(ans) {
	 //          var mes = ans.mes,
	 //              status = ans.status;

	 //          if ( status === 'OK'){
	 //            form.trigger('reset');
	 //            form.find('.success-mes').text(mes).show();           
	 //          } else{
	 //            form.find('.error-mes').text(mes).show();
	 //          }
	 //        });
	 //      }
	// };

	// var _ajaxForm = function (form, url) {

	//       console.log("hell");
	//       var data = form.serialize(); // собираем данные из формы в объект data

	//         return $.ajax({ // Возвращает Deferred Object
	//         type: 'POST',
	//         url: url,
	//         dataType : 'JSON',
	//         data: data
	//       }).fail( function () {
	//         console.log('Проблемы в PHP');
	//         form.find('.error-mes').text('На сервере произошла ошибка').show();
	//       });
	//     };

	return {
		init: initial
	};

})();

contactModule.init();