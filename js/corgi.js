jQuery(document).ready(function() {
	$(".show_comment_link").click(function(e){
		e.preventDefault();
		$(this).closest('.feed_item').find('.comment_area').slideToggle(400);
	});
	$(".share_wrapper").hover(
		function() {
			$(this).find('.share_hidden').show();
		},
		function() {
			$(this).find('.share_hidden').hide();
		}
	);
});