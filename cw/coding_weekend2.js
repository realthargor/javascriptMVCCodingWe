steal(
        './coding_weekend2.css', // application CSS file
        './models/models.js', // steals all your models
        //'./fixtures/fixtures.js',	// sets up fixtures for your models
        'jquery/view',
        // FIXME diese Teile muss man selbst einbinden damit die Templates funktionieren
        'jquery/view/ejs',
        // FIXME helper funktionieren nicht
        'jquery/view/helpers',
        function() {					// configure your application
            var kundeModel = new Cw.Models.Kunde();
            var personendatenView = $.View("//cw/views/personendaten.ejs", kundeModel);
            $("#personendaten").html(personendatenView);

            var adressdatenView = $.View("//cw/views/adressdaten.ejs", kundeModel);
            $("#adressdaten").html(adressdatenView);

            var uebersichtView = $.View("//cw/views/uebersicht.ejs", kundeModel);
            $("#uebersicht").html(uebersichtView);

        });