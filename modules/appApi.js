(function () { 
	var obj =  function (env, pkg) {
		var fs = require('fs'),
		    me = this;
		
		me.call = function(rest, incomeData, callback) {
			callback({rest: 'rest', incomeData: incomeData, dir: __dirname, env : env });
		};	
	};
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		module.exports = obj;
	} 

})();
