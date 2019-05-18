$('.box').css(
	{
		height: '300px',
		width: '300px',
		backgroundColor: 'blue'
	}
);
$('.box').click(function() {
  $('.box').fadeOut(1000)
	       .fadeIn(1000)
	       .animate(
	  {
		   opacity:0.25,
		   height:"toggle",
		   left: "+=100"
	  }
  )
}
);