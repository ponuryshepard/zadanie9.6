var list = document.getElementById('list');
var add = document.getElementById('addElem');

addEventListener('click', function() {
	list.innerHTML += '<li>item ' + x.length + '</li>';
});

var x = document.getElementsByTagName('li');

console.log(x);
console.log(x.length);
	