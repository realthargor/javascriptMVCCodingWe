// map fixtures for this application

steal("jquery/dom/fixture", function(){
	
	$.fixture.make("kunde", 5, function(i, kunde){
		var descriptions = ["grill fish", "make ice", "cut onions"]
		return {
			name: "kunde "+i,
			description: $.fixture.rand( descriptions , 1)[0]
		}
	})
})