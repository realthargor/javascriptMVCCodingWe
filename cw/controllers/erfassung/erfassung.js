steal(
    'cw/models/models.js',		// steals all your models
    'jquery/controller',
    'jquery/view/ejs',
    'jquery/lang/observe')
	.then( './views/personendaten.ejs', function($){

/**
 * @class Cw.Controllers.Erfassung
 */
$.Controller('Cw.Controllers.Erfassung',
/** @Static */
{
	defaults : {
            // FIXME Observer-Pattern funktioniert nicht
        model :$.O(new Cw.Models.Kunde()),
        // FIXME falsche pfade werden nicht mit einer exception gemeldet
        templatePersonendaten : "./views/personendaten.ejs",
        templateAdressdaten : "./views/adressdaten.ejs"
    }
},
/** @Prototype */
{

	init : function(){
		this.element.html(this.options.templatePersonendaten ,this.options.model );
	},

    '.forward click' : function(el, ev){
        this.element.html(this.options.templateAdressdaten, this.options.model )
    }
})

});