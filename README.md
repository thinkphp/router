Router
------

A basic routes framework for JS using hashchange event.

Synopsis
========

      var app = new Router()
  
          app.get('/pages/:n', function( data ){

                 //do something
          })

          app.run() 

How to use
==========

       var app = new Router()

           app.get('/bubble', function() {                     

                  var arr = [9,8,7,6,5,4,3,2,1,0], 
                      n = arr.length
                      swap = function(i,j) {var aux = arr[i]; arr[i] = arr[j]; arr[j] = aux;}

                  console.log(arr);

                  for(var i=0;i<n-1;i++) {
                      for(var j=i+1;j<n;j++) {
                          if(arr[i]>arr[j]) {
                             swap(i,j)
                          }
                      }
                  }

                  console.log( 'bubble sort' )
                  console.log(arr);
           }) 

           app.get('/insert', function() {

                  var arr = [9,8,7,6,5,4,3,2,1,0], 
                      n = arr.length

                  console.log( arr )

                  for(var i=1;i<n;i++) {

                      var temp = arr[i],
                          j = i - 1  

                          while(j>=0 && temp < arr[j]) {
                                arr[j+1] = arr[j]
                                j--
                          } 
                          arr[j+1] = temp 
                  }

                  console.log( 'insert sort' )
                  console.log( arr )
                   
           }) 



           app.get('/subsets/:n', function( data ) {

                   var n = parseInt( data.n ), 
                       arr = [], 
                       out = ""

                   for(var i=0;i<n;i++) {
                       arr[i] = 0
                   }  

                   do {
                      arr[n-1]++
                                    
                      for(var j=n-1;j>=0;j--) {  

                          if(arr[j] > 1) {
                             arr[j] -= 2
                             arr[j-1] += 1
                          } 
                      }


                      for(var j=0;j<n;j++) {  

                          if(arr[j]) out += (j+1) + ', ' 
                      }

                      out += '\n'
 
                      var s = 0   
                      for(var k = n - 1; k >= 0; k--) {  
                          s = s + parseInt(arr[k])  
                      }

                   }while(s < n)

                   console.log( out ) 
           }) 

           app.get('/services/:denumire', function( data ){

                    console.log(data.denumire)
           })

           app.run()
