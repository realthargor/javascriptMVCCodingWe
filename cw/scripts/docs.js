//js codingWeekend2/scripts/doc.js

load('steal/rhino/rhino.js');
steal("documentjs").then(function(){
	DocumentJS('codingWeekend2/coding_weekend2.html', {
		markdown : ['coding_weekend2']
	});
});