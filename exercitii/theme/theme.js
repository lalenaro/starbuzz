// JavaScript Document
var root = document.getElementsByTagName('body')[0];
$('#dark').click(function(){
	root.style.setProperty('--bgcolor','black');
	root.style.setProperty('--txcolor','white');
});
$('#blue').click(function(){
	root.style.setProperty('--bgcolor','lightblue');
	root.style.setProperty('--txcolor','black');
});
$('#light').click(function(){
	root.style.setProperty('--bgcolor','white');
	root.style.setProperty('--txcolor','black');
});
