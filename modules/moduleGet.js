(function () { //
	var obj =  function (env, pkg) {
		let fs = require('fs');
		let me = this;
		me.run = (path, cbk) => {
			me.showShareFolder(cbk);
		}
		me.showShareFolder = (cbk) => {
			const dirn = '/var/_shareFolder';
			fs.readdir(dirn, (err, files) => {
				if (files.length) {
					cbk(files);
					/*
					fs.readdir(dirn + '/' + files[0], (err, content) => {
						cbk((err)?err.message : content);
					});*/
				} else {
					cbk(files)
				}
			});
		}
	};
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		module.exports = obj;
	} 

})();
