(function () { 
	var obj =  function (env, pkg) {
		var fs = require('fs'),
		    me = this;
		
		me.call = function(rest, incomeData, callback) {
			let REST_MODULE = pkg.require(__dirname + '/moduleGet.js');
			let getm = new REST_MODULE(env, pkg);
			getm.run(incomeData.path, callback);
			// callback({rest: rest, incomeData: incomeData, dir: __dirname, env : env });
		};	
	};
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		module.exports = obj;
	} 

})();
