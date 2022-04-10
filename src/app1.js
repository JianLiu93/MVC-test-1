import './app1.css';
import $ from 'jquery';

const $number = $('.output');
const $button1 = $('button.add1');
const $button2 = $('button.minus1');
const $button3 = $('button.add10');
const $button4 = $('button.minus10');

$button1.on('click', () => {
	let n = parseInt($number.text());
	n++;
	$number.text(n);
});
$button2.on('click', () => {
	let n = parseInt($number.text());
	n--;
	$number.text(n);
});
$button3.on('click', () => {
	let n = parseInt($number.text());
	n += 10;
	$number.text(n);
});
$button4.on('click', () => {
	let n = parseInt($number.text());
	n += -10;
	$number.text(n);
});