﻿$(document).ready(function(){$(function(){if($('#ControlBar_ControlPanel').length)$('#wideMenu').removeClass('c1-01').addClass('moveDown');});$("#back-top").hide();$(function(){$(window).scroll(function(){if($(this).scrollTop()>100){$('#back-top').fadeIn();}else{$('#back-top').fadeOut();}});$('#back-top a').click(function(){$('body,html').animate({scrollTop:0},800);return false;});});});function PrintElem(title,elem)
{Popup(title,document.getElementById(elem).innerHTML);}
function Popup(title,data)
{data=data.replace(/<a/gi,"<span");data=data.replace(/<\/a/gi,'</span');var mywindow=(window.open('Print%20Page.html','','location=1,status=1,scrollbars=1,height=500,width=800'));mywindow.document.write('<html><head><title>Print Page</title>');mywindow.document.write('<link href="/Portals/_default/Skins/HellTruth/styles.css" rel="stylesheet" type="text/css" />');mywindow.document.write('<link href="http://fonts.googleapis.com/css?family=Libre+Baskerville:400,700|Maven+Pro:500,400,700" rel="stylesheet" type="text/css">');mywindow.document.write('</head><body><div style="width: 100%; font-family: arial;">');mywindow.document.write('<div class="t2-44">'+title.replace(/-/gi,' ')+'</div><hr><div class="g-11 t2-57">');mywindow.document.write(data);mywindow.document.write('</div><hr><div class="t2-26">This material was printed from www.HellTruth.com</div>');mywindow.document.write('</div></body></html>');mywindow.document.close();setTimeout(function(){mywindow.print()},1000);return true;}
function swapTheClass(theClassName,theClassValue){$('.'+theClassName).attr('class',theClassValue);}
function elementClassToggle(elementName){$('.'+elementName).toggleClass('mobileSubMenuIsNotVisible');var sectionName='';if(window.location.pathname.toLowerCase().indexOf('history')>0){sectionName='History';}
if(window.location.pathname.toLowerCase().indexOf('q-a')>0){sectionName='Q & A';}
if(window.location.pathname.toLowerCase().indexOf('free-resources')>0){sectionName='Resources';}
if(window.location.pathname.toLowerCase().indexOf('contact-us')>0){sectionName='ContactUs';}
$('#m'+sectionName).toggleClass('mobileSubMenuIsNotVisible');$('#'+sectionName+'MenuOpen').toggleClass('mobileSubMenuIsNotVisible');$('#'+sectionName+'MenuClose').toggleClass('mobileSubMenuIsNotVisible');}
function toggleTheClass(elementName1,elementName2,elementName3){$('#'+elementName1).toggleClass('mobileSubMenuIsNotVisible');$('#'+elementName2).toggleClass('mobileSubMenuIsNotVisible');$('#'+elementName3).toggleClass('mobileSubMenuIsNotVisible');}
;;;