var objects = ['assets/img/kitten1.jpg', 
			   'assets/img/kitten2.jpg', 
			   'assets/img/kitten3.jpg', 
			   'assets/img/kitten4.jpg', 
			   'assets/img/kitten5.jpg', 
			   'assets/img/kitten6.jpg', 
			   'assets/img/kitten7.jpg', 
			   'assets/img/puppy1.jpg',
			   'assets/img/puppy2.jpg',
			   'assets/img/puppy3.jpg',
			   'assets/img/puppy4.jpg',
			   'assets/img/puppy5.jpg',
			   'assets/img/puppy6.jpg',
			   'assets/img/puppy7.jpg',
			   'assets/img/billy1.jpg',
			   'assets/img/billy2.jpg',
			   'assets/img/billy3.jpg',
			   'assets/img/billy4.jpg',
			   'assets/img/billy5.jpg',
			   'assets/img/billy6.jpg',
			   'assets/img/billy7.jpg',

];

$('.button').click(function() {
	var random_object = Math.floor(Math.random() * objects.length),
		object_to_use		 = objects[random_object],
		result 				 = '';

console.log(random_object);
	$('.content').prepend(result);
	// $('.content').append('<img src="assets/img/bunny.jpg" />');
});