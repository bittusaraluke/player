(function(p,x){p.HAPTextScroller=function(q){function u(){e-=r;a.css("left",e+"px");parseInt(a.css("left"),10)<-f&&(e=-r)}var g=this,p=HAPUtils.isMobile(),l=q.settings,h=q.mask,a=q.container,r=Math.abs(l.titleScrollSpeed),v=l.titleScrollSeparator,m=l.titleScrollCenterOnRest||!1,w=l.titleScrollPauseOnHover||!0,b,e=0,k,n,f,t,c=!1;this.setData=function(){if(!p&&w)h.on("mouseenter",function(){c&&b&&clearInterval(b)}).on("mouseleave",function(){c&&(b&&clearInterval(b),b=setInterval(u,100))})};this.input=
function(d){k=d;a.html("").css("width","auto").html(k);n=a.width();h.width()<n?g.setScrollString():(m&&a.addClass("hap-media-title-center"),t=!0)};this.setScrollString=function(){m&&a.removeClass("hap-media-title-center");var d=k.replace(/\s/g,"&nbsp;")+v;a.html("").css("width","auto").html(d);f=a.width();if(0!=f){var b=d;if(f<=2*h.width()){var c,e=Math.floor(2*h.width()/f);for(c=0;c<e;c++)b+=d;d=f*(e+1)}else b+=d,d=2*f;a.html(b);a.css("width",d+1+"px");t=!0;g.activate()}};this.activate=function(){c&&
g.deactivate();h.width()>=n?(a.html("").css("width","auto").html(k),m&&a.addClass("hap-media-title-center"),c=!1):(b&&clearInterval(b),b=setInterval(u,100),c=!0)};this.deactivate=function(d){c&&(b&&clearInterval(b),a.css("left","0px"),e=0,"undefined"!==typeof d&&a.html("").css("width","auto").html(d),c=!1)};this.checkSize=function(){t&&(h.width()>=n?(c&&g.deactivate(),a.html("").css("width","auto").html(k),m&&a.addClass("hap-media-title-center")):g.setScrollString())};this.setScrollSpeed=function(a){r=
Math.abs(a)};this.setScrollSeparator=function(a){v=a;g.deactivate();g.setScrollString()};this.setData()}})(window,jQuery);