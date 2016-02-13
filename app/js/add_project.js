var myModule = (function () {
   
   // инициализирует модуль
	var init = function () {
		_setUpListners();
	};
    // прослушивает события
	var _setUpListners = function () {
		// прослушка событий
		$('#new-work-add-popup').on('click', _showModal); // открыть модальное окно
		$('#new-project-add').on('submit', _addProject); // добавить проект
		$('#element_to_pop_up').on('submit', _addProject); // отправка формы "связаться со мной"
		// $('#contact-me').on('reset', _resetForm);
		$('form').on('keydown', '.inValidBorderColor', _removeError);
	};
    var _removeError = function () {
    	$(this).removeClass('inValidBorderColor');
    };

    // работает с модальным окном
	var _showModal = function (e) {
		  console.log('Модальное окно');
		  e.preventDefault();
 		   var divPopup = $('#element_to_pop_up')
		 	   form = divPopup.find('.form');
		       divPopup.bPopup({
			 //  modalColor: 'black',
			 //  speed: 650,
			 //  transition: 'slideDown',
				onClose : function () { 
					var form =$(this);
					form.find('.status-box').text('').addClass('error-mes').removeClass('success-mes').hide();
					$('.new-work-add').find('.inValidBorderColor').removeClass('inValidBorderColor');
					form.find('input, textarea').trigger('hideToolTip').val('');

				}
		  });               
	    };
    // добавляет проект
	var _addProject = function (e) {
		  console.log('Добавить проект');
		  e.preventDefault();

		  var form = $(this);
		      url = 'add-project.php';
		      if (!validator.validationForm(form)) return false;
		      serverGiveMeAnAnswer = _ajaxForm( form, url);  

		  
		  serverGiveMeAnAnswer.done(function(answer) {
		  	console.log(answer);


		  	if (answer.status === 'OK'){
		  		console.log(answer.text);
		  		$('.status-box').text('УрАААА').addClass('success-mes').show();
		  		form.find('input, textarea').trigger('hideToolTip').val('');
		  	}else{
		  		console.log(answer.text);
		  		
		  		$('.status-box').text('Плохо').addClass('error-mes').removeClass('success-mes').show();
		  	}
		  	
		  }).fail ( function(answer) {
		  	console.log('Проблемы в PHP');
		 	$('.status-box').addClass('error-mes').removeClass('success-mes').text('На сервере произошла ошибка').show();
    	  });  
	    };       
    // универсальная функция
    // 1. собирает данные из формы
    // 2. проверяет форму
    // 3. делает запрос на сревер и возвращает ответ с сервера
	var _ajaxForm = function ( form, url ) {
		// 1. проверить форму
		// 2. собрать данные из формы
		// 3. вернуть ответ с сервера
		 data = form.serialize();

		 var result = $.ajax({
		  	url: url,
		  	type: 'POST',
		  	dataType: 'json',
		  	data: data,
		  })
		 return result;
	    };   

	return {
		init: init
	};

})();

myModule.init();