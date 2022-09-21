"use strict"
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active'); // добавляет класс при нажатии
		$('body').toggleClass('lock'); //убирает прокрутку у элемента
	});
	$('.header__menu').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active'); // добавляет класс при нажатии
		$('body').toggleClass('lock'); //убирает прокрутку у элемента
	});
});
$('.single-item').slick();
