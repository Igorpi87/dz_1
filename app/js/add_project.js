var myModule = (function () {

	var init = function () {
		_setUpListners();
	};

	var _setUpListners = function () {
		// прослушка событий
		$('#new-work-add-popup').on('click', _showModal); // открыть модальное окно
		$('#new-project-add').on('submit', _addProject); // добавить проект
		
	    };

	var _showModal = function (e) {
		  console.log('Модальное окно');
		  e.preventDefault();
		  $('#element_to_pop_up').bPopup({
			modalColor: 'black',
			speed: 650,
			transition: 'slideDown'
		  });
                  
	    };

	var _addProject = function (e) {
		  console.log('Добавить проект');
		  e.preventDefault();

		  var form = $(this);
		      url = 'add-project.php';
		      data = form.serialize();

          console.log(data);
		  // запрос на сервер    
		  $.ajax({
		  	url: url,
		  	type: 'POST',
		  	dataType: 'json',
		  	data: data
		  })
		  .done(function(ans) {
		  	console.log(ans);
		  	if (ans.status === 'ok'){
		  		
		  		form.find('.success-mes').text(ans.text).show();
		  	}else{
		  		form.find('.error-mes').text(ans.text).show();
		  	}
		  	
		  })
		  .fail(function() {
		  	console.log("error");
		  });
		  

		 


	    };       

	return {
		init: init
	};

})();

myModule.init();