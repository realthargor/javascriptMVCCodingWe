steal('jquery/model', function(){

/**
 * @class Cw.Models.Kunde
 * @parent index
 * @inherits jQuery.Model
 * Wraps backend kunde services.  
 */
$.Model('Cw.Models.Kunde',
/* @Static */
{
	findAll: "/kundes.json",
  	findOne : "/kundes/{id}.json",
  	create : "/kundes.json",
 	update : "/kundes/{id}.json",
  	destroy : "/kundes/{id}.json"
},
/* @Prototype */
{
    "vorname" : "",
    "nachname" : "",
    "geburtsdatum" : "",
    "kreditkartennummer" : "",
    "land" : "",
    "adresse" : "",
    "plz" : "",
    "ort" : ""
});

})