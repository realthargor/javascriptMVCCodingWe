steal('funcunit').then(function(){

module("Cw.Controllers.Erfassung", { 
	setup: function(){
		S.open("//cw/controllers/erfassung/erfassung.html");
	}
});

test("Text Test", function(){
	equals(S("h1").text(), "Cw.Controllers.Erfassung Demo","demo text");
});


});