//
// jquery.headerPersist.1.0.js
//
// Locks a header to the top of the page only when user is
// scrolling within it's parent container.
//
//
// REQUIRED HTML:
//
// <div class="persistMe">
//   <h2>Header 1</h2>
//   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a tellus ante, vel bibendum sem. Praesent non urna ut leo congue laoreet ut nec mi. Aenean est risus, laoreet quis faucibus non, cursus eget enim. Sed ac arcu sed elit consectetur aliquet. Phasellus sem magna, gravida et feugiat vel, sollicitudin eget magna. Suspendisse potenti. Suspendisse dictum justo eu arcu tempus malesuada. Vestibulum neque orci, bibendum ut vehicula eu, congue malesuada nisl. Fusce sed velit nec nunc dictum laoreet sed et ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ac tristique libero. Vivamus sit amet sem et odio mollis iaculis non vel libero. Phasellus a consectetur lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
// </div>
//
//
// REQUIRED JS:
//
// $('.persistMe').headerPersist();
//
//
// OPTIONAL STYLING:
//
// You can style the container with the headerPersist-area class
// You can style the header with the headerPersist-header class
//

(function( $ ){
	$.fn.headerPersist = function() {
		
		this.each(function() {
			$(this)
				.addClass("headerPersist-area")
				.find(">:first-child")
					.addClass("headerPersist-header");
		});
	
		function UpdateTableHeaders() {
		   $(".headerPersist-area").each(function() {
		
			   var el             = $(this),
				   offset         = el.offset(),
				   scrollTop      = $(window).scrollTop(),
				   floatingHeader = $(".headerPersist-floatingHeader", this)
		
			   if ((scrollTop > offset.top) && (scrollTop < offset.top + el.height())) {
				   floatingHeader.css({
					"visibility": "visible"
				   });
			   } else {
				   floatingHeader.css({
					"visibility": "hidden"
				   });
			   };
		   });
		}
		
			
		var clonedHeaderRow;
		
		$(".headerPersist-area").each(function() {
			clonedHeaderRow = $(".headerPersist-header", this);
			clonedHeaderRow
			.before(clonedHeaderRow.clone())
			.css("width", clonedHeaderRow.width())
			.css("position", "fixed")
			.css("top", "0")
			.addClass("headerPersist-floatingHeader");
		});
		
		$(window)
		.scroll(UpdateTableHeaders)
		.trigger("scroll");
		
		return this;
	
	};
})( jQuery );