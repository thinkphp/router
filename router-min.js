var Router=function(){var b=this;this._compiled=[];this._rules=[];var a=function(){window.addEventListener("hashchange",function(c){b._match(document.location.hash)})};a()};Router.prototype._compile=function(){var d=this._rules.length,a;for(a=0;a<d;a++){var c=[],b=this._rules[a][0].replace(/:[^\/]+/gi,function(e){c.push(e.substr(1));return"([^/]+)"});this._compiled.push({keys:c,handler:this._rules[a][1],re:new RegExp(b)})}};Router.prototype._match=function(a){var e={},b=this._compiled.length,f,d;for(f=0;f<b;f++){var g=a.match(this._compiled[f].re);if(g){var k=this._compiled[f].keys,c=k.length,h=this._compiled[f].handler;for(d=0;d<c;d++){e[k[d]]=g[d+1]}if(h){h(e)}}}};Router.prototype.get=function(b,a){this._rules.push([b,a])};Router.prototype.run=function(){this._compile()};