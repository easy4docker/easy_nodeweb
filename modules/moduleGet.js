(function () { //
	var obj =  function (env, pkg) {
		let fs = require('fs');
		let me = this;
		me.run = (path, cbk) => {
			me.showShareFolder(cbk);
		}
		me.showShareFolder = (cbk) => {
			fs.readdir('/var/shareFolder', (err, files) => {
			  cbk(files);
			});
		}
	};
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		module.exports = obj;
	} 

})();
