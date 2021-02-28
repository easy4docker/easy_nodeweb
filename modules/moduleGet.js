(function () { //
	var obj =  function (env, pkg) {
		let fs = require('fs');
		let me = this;
		me.run = (path, cbk) => {
			me.showShareFolder(cbk);
		}
		me.showShareFolder = (cbk) => {
			cbk('showShareFolder-->');

		}
	};
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		module.exports = obj;
	} 

})();
