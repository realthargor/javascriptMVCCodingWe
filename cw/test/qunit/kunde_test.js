steal("funcunit/qunit", "cw/fixtures", "cw/models/kunde.js", function(){
	module("Model: Cw.Models.Kunde")
	
	test("findAll", function(){
		expect(4);
		stop();
		Cw.Models.Kunde.findAll({}, function(kundes){
			ok(kundes)
	        ok(kundes.length)
	        ok(kundes[0].name)
	        ok(kundes[0].description)
			start();
		});
		
	})
	
	test("create", function(){
		expect(3)
		stop();
		new Cw.Models.Kunde({name: "dry cleaning", description: "take to street corner"}).save(function(kunde){
			ok(kunde);
	        ok(kunde.id);
	        equals(kunde.name,"dry cleaning")
	        kunde.destroy()
			start();
		})
	})
	test("update" , function(){
		expect(2);
		stop();
		new Cw.Models.Kunde({name: "cook dinner", description: "chicken"}).
	            save(function(kunde){
	            	equals(kunde.description,"chicken");
	        		kunde.update({description: "steak"},function(kunde){
	        			equals(kunde.description,"steak");
	        			kunde.destroy();
						start();
	        		})
	            })
	
	});
	test("destroy", function(){
		expect(1);
		stop();
		new Cw.Models.Kunde({name: "mow grass", description: "use riding mower"}).
	            destroy(function(kunde){
	            	ok( true ,"Destroy called" )
					start();
	            })
	})
})