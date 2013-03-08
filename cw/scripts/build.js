//js codingWeekend2/scripts/build.js

load("steal/rhino/rhino.js");
steal('steal/build').then('steal/build/scripts','steal/build/styles',function(){
	steal.build('cw/scripts/build.html',{to: 'cw'});
});
