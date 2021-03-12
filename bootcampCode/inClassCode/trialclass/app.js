$('ul').on('click', 'li', function () {
	$(this).toggleClass('completed');
});

$('ul').on('click', 'span', function (event) {
	$(this).parent().remove();
});

$('input').keypress(function (event) {
	if (event.which === 13) {
		var todoItem = $(this).val();
		if (todoItem == '') {
			return false;
		} else {
			$('ul').append('<li>' + todoItem + '<span>X</span></li>');
		}
	}
});
