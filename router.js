var Router = function() {

             var self = this

             this._compiled = []

             this._rules = []

             var attach = function(){

                 window.addEventListener('hashchange', function( e ){

                        self._match(document.location.hash) 
                 }) 
             }

             attach()
}

Router.prototype._compile = function() {

             var n = this._rules.length, 

                 i

             for(i = 0; i < n; i++) {

                 var keys = [],

                     reg = this._rules[ i ][ 0 ].replace(/:[^\/]+/gi, function( key ){

                           keys.push( key.substr( 1 ) )

                           return "([^\/]+)" 
                     })

                 this._compiled.push({keys: keys, 

                                      handler: this._rules[ i ][ 1 ], 

                                      re: new RegExp( reg ) 
                                      }) 
             }
        } 

Router.prototype._match = function( url ) {

               var data = {},

                   n = this._compiled.length,

                   i, 

                   j

               for(i = 0; i < n; i++) {

                   var match = url.match( this._compiled[ i ].re ) 

                   if( match ) {

                       var keys = this._compiled[ i ].keys, 

                           m = keys.length, 

                           handler = this._compiled[ i ].handler 

                       for(j = 0; j < m; j++) {

                           data[keys [ j ] ] = match[ j + 1 ]   
                       }

                       if( handler ) {

                           handler( data )
                       } 
                   }
               } 
        }

Router.prototype.get = function(rule, fn) {

             this._rules.push([rule, fn]) 
        }

Router.prototype.run = function() {
 
             this._compile()
} 

