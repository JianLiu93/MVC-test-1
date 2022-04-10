import './app2.css';
import $ from 'jquery';

const $tabBar = $('.app2 .tab-bar');
const $tabContent = $('.app2 .tab-content');

$tabBar.on('click', 'li', (e) => {
	console.log(e.target);
	let $li = $(e.currentTarget);
	let index = $li.index();
	console.log(index);

	$li.addClass('active')
	.siblings().removeClass('active');
	$tabContent.children()
	.eq(index).addClass('active')
	.siblings().removeClass('active');
});
