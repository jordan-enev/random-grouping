(function() {

	/**
	 * Generate groups of randomized elements
	 *
	 * @param {Array} array - Elements those are randomized
	 * @param {Object} [options] - It's optional.
	 * If omitted - then the array will be only randomized, without split into groups.
	 * It has the following structure: {
	 * 	int 'chunks': Creates groups by a number of elements,
	 * 	@reference Library.splitArrayByChunks()
	 *
	 * 	int 'groups': How many groups of elements to be created
	 * 	@reference Library.splitArrayByGroups()
	 * }
	 */
	var RandomGrouping = function(array, options){

		/**
		 * Stores all groups of randomized arrays' elements,
		 * those are split by chunks or groups.
		 * @type {Array}
		 */
		var groups = [];

		/**
		 * Randomize array element order in-place,
		 * using Durstenfeld shuffle algorithm.
		 */
		var shuffleArray = function() {
			for (var i = array.length - 1; i > 0; i--) {
				var j = Math.floor(Math.random() * (i + 1));
				var temp = array[i];
				array[i] = array[j];
				array[j] = temp;
			}
		};

		/**
		 * Split the array by chunks.
		 *
		 * It creates groups of N (chunks) elements.
		 * @example Let's say that we have the following array = [1,2,3,4,5,6]
		 * If we want to split it by 2 chunks, we'll get three groups of arrays:
		 * [ [1,2], [3,4], [5,6] ]
		 */
		var splitArrayByChunks = function() {
			var i,j,group;
			var chunk = options.chunks;

			for (i=0,j=array.length; i<j; i+=chunk) {
				group = array.slice(i,i+chunk);
				groups.push(group);
			}
		};

		/**
		 * Split the array by groups
		 *
		 * @example Let's say that we have the following array = [1,2,3,4,5,6]
		 * If we want to split it by 2 groups, we'll get two groups of arrays:
		 * [ [1,2,3], [4,5,6] ]
		 */
		var splitArrayByGroups = function() {
			var groups = options.groups;
			options.chunks = array.length / groups;
			splitArrayByChunks();
		};

		/**
		 * Validate options
		 */
		var validate = function() {
			if ( ! options ) {
				options = {};
			}

			// If none of the options are passed,
			// then set value of chunks
			if ( ! (options.chunks || options.groups)) {
				options.chunks = array.length;
			}
		};

		/**
		 * Triggers randomizing and grouping
		 * of the array's elements
		 *
		 * @returns {Array} - The final randomized elements,
		 * eventually split in groups (depends by options)
		 */
		this.proceed = function() {
			validate();
			shuffleArray();

			if (options.chunks) {
				splitArrayByChunks();
			} else {
				splitArrayByGroups();
			}

			return groups;
		}
	};

	window.randomGrouping = function(array, options) {
		var randomGrouping = new RandomGrouping(array, options);
		return randomGrouping.proceed();
	}
})();


