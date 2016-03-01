
var theWidth;
var theHeight;
var currentContent = 0;

$(window).ready(function () {
    sizeContent();
});

$(window).resize(function () {
    sizeContent();
});

function sizeContent() {
    theWidth = $(window).width();
    theHeight = $(window).height();
    sizeContentItems();
    setLeftOnContentItems();
    sizeContentWrapper(theWidth, theHeight);
    moveContent(currentContent, theWidth);
    changeSelected(currentContent);
}

function sizeContentItems() {
    $(".item").css('width', theWidth);
    $(".item").css('height', theHeight);
}



$(document).ready(function() {

	//get all link with class panel
	$('a.panel').click(function () {

                //reset and highlight the clicked link
		$('a.panel').removeClass('selected');
		$(this).addClass('selected');
		
		//grab the current item, to be used in resize function
		current = $(this);
		
                //scroll it to the destination
		$('#c1').scrollTo($(this).attr('href'), 800);		
		
                //cancel the link default behavior
		return false;
	});


	//resize all the items according to the new browser size
	$(window).resize(function () {
		
		//call the resizePanel function
		resizePanel();
	});
	
});

function resizePanel() {

	//get the browser width and height
	width = $(window).width();
	height = $(window).height();

	//get the mask width: width * total of items
	c1_width = width * $('.item').length;
		
	//set the dimension	
	$('#container, .item').css({width: width, height: height});
	$('#c1').css({width: c1_width, height: height});
	
	//if the item is displayed incorrectly, set it to the corrent pos
	$('#container').scrollTo($('a.selected').attr('href'), 0);
		
}

$(document).ready(function () {

   $('#container').scrollTo('.item', 0); 

}

/* This script and many more are available free online at
The JavaScript Source!! http://www.javascriptsource.com
Created by: Mr J | http://www.huntingground.net/ */

scrollStep=1

timerLeft=""
timerRight=""

function toLeft(id){
  document.getElementById(id).scrollLeft=0
}

function scrollDivLeft(id){
  clearTimeout(timerRight) 
  document.getElementById(id).scrollLeft+=scrollStep
  timerRight=setTimeout("scrollDivLeft('"+id+"')",10)
}

function scrollDivRight(id){
  clearTimeout(timerLeft)
  document.getElementById(id).scrollLeft-=scrollStep
  timerLeft=setTimeout("scrollDivRight('"+id+"')",10)
}

function toRight(id){
  document.getElementById(id).scrollLeft=document.getElementById(id).scrollWidth
}

function stopMe(){
  clearTimeout(timerRight) 
  clearTimeout(timerLeft)
}

