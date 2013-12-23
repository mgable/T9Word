var T9WORD = T9WORD || {}; // namespace component 

T9WORD.error = (function(){
	var errorField = "";
	/*
	   Function: error

	   sets error message

	   Parameters:

	      code - number 

	   Returns:

	      nothing
	*/
	return {
		display : function (code){
			var errorCodes = ["","Entry can only contain numbers", "Please enter some numbers", "A combination of only zeros and ones produces no results"]
			errorField.innerHTML = (errorCodes[code]);
		},
		init : function (field){
			errorField = field
		}
	}
})();
