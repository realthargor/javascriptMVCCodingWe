//js codingWeekend2/scripts/build.js

load("steal/rhino/rhino.js");
steal('steal/build').then('steal/build/scripts','steal/build/styles',function(){
	steal.build('codingWeekend2/scripts/build.html',{to: 'codingWeekend2'});
});
