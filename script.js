var Library = function(array, options){
	var groups = [];

	/**
	 * Randomize array element order in-place.
	 * Using Durstenfeld shuffle algorithm.
	 */
	var shuffleArray =  function() {
		for (var i = array.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
	};

	var groupArray = function() {
		var i,j,group;
		var chunk = options.chunk;

		for (i=0,j=array.length; i<j; i+=chunk) {
			group = array.slice(i,i+chunk);
			groups.push(group);
		}
	};

	var validate = function() {
		if ( ! options ) {
			options = {};
		}

		if ( ! options.chunk ) {
			options.chunk = array.length;
		}
	};

	this.randomGrouping = function(array, options) {
		validate();
		shuffleArray();
		groupArray();

		return groups;
	}
};


