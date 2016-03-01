function resizePanel() {

	//get the browser width and height
	width = $(window).width();
	height = $(window).height();

	//get the mask width: width * total of items
	c1_width = width * $('.item').length;
		
	//set the dimension	
	$('.container, .item').css({width: width, height: height});
	$('.c1').css({width: mask_width, height: height});
	
	//if the item is displayed incorrectly, set it to the corrent pos
	$('.container').scrollTo($('a.selected').attr('href'), 0);
		
}