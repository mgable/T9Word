var T9WORD = T9WORD || {}; // namespace component 

T9WORD.view = (function(){
	var button = document.getElementsByTagName('button')[0], 
	inputField = document.getElementById('numbers'), 
	outputField = document.getElementById('output'),
	filters = document.getElementsByName('filter'),
	errorField = document.getElementById('errorField'),
	fetchData = function (){
		if ($('input[name="filter"]:checked').val() === "words"){
			$('#floatingBarsG').show();
			 T9WORD.lookupService(T9WORD.controller(inputField.value),inputField.value).then(function(data){
			 	outputField.value = data;
			 }).done(function(){$('#floatingBarsG').hide();});
		} else {
			outputField.value = T9WORD.controller(inputField.value);
		}
	};

	T9WORD.error.init(errorField);
	button.onclick = fetchData,
	inputField.focus();

	window.onkeypress = function(event) {
		if (event.which == 13) {
			event.preventDefault();
			fetchData();
		}
	};

	for (var x = 0, limit = filters.length; x < limit; x = x + 1){
		filters[x].onclick = function (){
			if (outputField.value !== "" && inputField.value !== ""){
				fetchData();
			}
		}
	}
})();