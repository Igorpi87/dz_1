var myModule = (function () {
   
   // инициализирует модуль
	var init = function () {
		_setUpListners();
	};
    // прослушивает события
	var _setUpListners = function () {
		// прослушка событий
		$('#new-work-add-popup').on('click', _showModal); // открыть модальное окно
	//	$('#new-project-add').on('submit', _addProject); // добавить проект
	    };

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
 
	return {
		init: init
	};

})();

myModule.init();