steal("funcunit", function(){
	module("coding_weekend2 test", { 
		setup: function(){
			S.open("//cw/coding_weekend2.html");
		}
	});
	
	test("Copy Test", function(){
		equals(S("h1").text(), "Welcome to JavaScriptMVC 3.2!","welcome text");
	});
})