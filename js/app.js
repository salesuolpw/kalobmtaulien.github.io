$(document).ready(function(){var t=($("html, body"),"#");$(".btn--subscribe").attr("href",t),$.ajax({url:"https://kalobmtaulien.github.io/template/menu-links.json",type:"GET",crossDomain:!0,data:{},dataType:"json",success:function(t){var e="<ul>";for(var o in t.links)e+="<li><a href='"+t.links[o]+"'>"+o+"</a></li>";e+="</ul>",$(".related-links:first").append(e),$("#mobile-menu").html(e)},error:function(t,e){}}),$.ajax({url:"https://kalobmtaulien.github.io/template/footer-links.json",type:"GET",crossDomain:!0,data:{},dataType:"json",success:function(t){var e="";for(var o in t.links)e+="<a href='"+t.links[o].url+"'> \t\t\t\t\t\t\t<i class='"+t.links[o].icon+"'></i><span class='margin--left-5'>"+t.links[o].text+"</span> \t\t\t\t\t\t</a>";$("#footer-links").prepend(e)},error:function(t,e){console.log(e)}}),resizeBody=function(){var t=$(window).height(),e=$("nav").outerHeight(),o=$("footer").outerHeight();$("#body").css("min-height",t-e-o-1),$("#mobile-menu").css("height",$(document).height())},window.onresize=function(){resizeBody()},resizeBody(),$("#float-column").affix({offset:{top:80,bottom:function(){return this.bottom=$("footer").outerHeight(!0)}}}),$(document).on("mouseout",".menu-opened",function(t){$("#menu-slider").stop(!0,!0),$("#menu-slider").css({left:$("#menu-slider").width()/-1})}).on("click",".open-mobile-menu",function(t){t.preventDefault(),$("#mobile-menu").toggle()}),$(window).scroll(function(t){clearTimeout(e);var e=setTimeout(function(){$(window).scrollTop()>=70?$("#float-column #header").fadeIn(150):$("#float-column #header").fadeOut(100)},250)})});