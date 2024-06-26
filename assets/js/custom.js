(function($) {
	"use strict";
	$('.minus').click(function() {
		var $input = $(this).parent().find('.box');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function() {
		var $input = $(this).parent().find('.box');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
	const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
	const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
})(jQuery);