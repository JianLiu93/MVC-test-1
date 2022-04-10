import './app3.css';
import $ from 'jquery';

const $box = $('.app3 .box');
$box.on('click', () => {
	$box.toggleClass('active');
});