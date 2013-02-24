steal("funcunit", function(){
	module("testapp test", { 
		setup: function(){
			S.open("//testapp/testapp.html");
		}
	});
	
	test("Copy Test", function(){
		equals(S("h1").text(), "Welcome to JavaScriptMVC 3.2!","welcome text");
	});
})