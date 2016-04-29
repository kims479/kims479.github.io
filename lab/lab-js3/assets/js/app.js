var objects = ['assets/img/bunny.jpg', 
			   'assets/img/cat.jpg',
			   'assets/img/dog.jpg',
			   'assets/img/sloth.jpg',
			   'assets/img/circle.jpg',
			   'assets/img/square.jpg',
			   'assets/img/triangle.jpg',
			   'Meow',
			   '...',
			   'Woof',
			   'Meep'];

var colors = ['red', 'blue', 'yellow'];

$('.button').click(function() {
	var random_object_number = Math.floor(Math.random() * objects.length),
		random_color_number  = Math.floor(Math.random() * colors.length),
		object_to_use		 = objects[random_object_number],
		color_to_use		 = colors[random_color_number],
		result 				 = '';

	if (random_object_number > 6) {
		result = '<span class="object ' + color_to_use + '">' + object_to_use + '</span>';
	} else {
		result = '<img class="object ' + color_to_use + '" src"' + object_to_use + '" />';
	}
		

console.log(random_object);
	$('.content').prepend(result);
	// $('.content').append('<img src="assets/img/bunny.jpg" />');
});