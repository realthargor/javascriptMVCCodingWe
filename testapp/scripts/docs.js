//js testapp/scripts/doc.js

load('steal/rhino/rhino.js');
steal("documentjs").then(function(){
	DocumentJS('testapp/testapp.html', {
		markdown : ['testapp']
	});
});