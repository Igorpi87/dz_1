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
	    };
    // работает с модальным окном
	var _showModal = function (e) {
		  console.log('Модальное окно');
		  e.preventDefault();
		  var divPopup = $('#element_to_pop_up'),
		      form = divPopup.find('.form');
		    divPopup.bPopup({
			modalColor: 'black',
			speed: 650,
			transition: 'slideDown',
			onClose : function () {
				form.find('.success-mes').text('').hide(),
				form.find('.error-mes').text('').hide();
			}
		  });               
	    };
    // добавляет проект
	var _addProject = function (e) {
		  console.log('Добавить проект');
		  e.preventDefault();

		  var form = $(this);
		      url = 'add-project.php';
		      serverGiveMeAnAnswer = _ajaxForm( form, url);  

		  
		  serverGiveMeAnAnswer.done(function(ans) {
		  	console.log(ans);

		  	var successBox = form.find('.success-mes'),
		  	    errorBox = form.find('.error-mes');

		  	if (ans.status === 'OK'){
		  		console.log(ans.text);
		  		successBox.hide();
		  		successBox.text(ans.text).show();
		  	}else{
		  		console.log(ans.text);
		  		errorBox.hide();
		  		errorBox.text(ans.text).show();
		  	}
		  	
		  })  
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
		  }).fail ( function(ans) {
		  	console.log('Проблемы в PHP');
		  	form.find('.error-mes').text('На сервере произошла ошибка').show();
    	  });
		 return result;
	    };   

	return {
		init: init
	};

})();

myModule.init();