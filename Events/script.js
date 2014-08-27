/* DOM-0 method: older and do not allow to create identical events more than once */
/*
var elem = document.getElementById('clickme');
elem.onclick = function () {
    alert('You clicked me!');
    elem.onclick = function () {};
};
*/

/* DOM-2 */
var elem = document.getElementById('clickme');

var func_01 = function () {
    alert('1. You clicked me!');
    elem.removeEventListener('click', func_01, false);
};

// phase: capture (false, descending from parent to child), bubbling (true, ascending from child to parent)
elem.addEventListener('click', func_01, false);
elem.addEventListener('click', function () {
    alert('2. You clicked me!');
}, false);
elem.addEventListener('click', function (event) {
    alert(event.type);
    event.target.innerHTML = 'You clicked!';
}, false);

var parent = document.getElementById('parent'), 
    child_01 = document.getElementById('child_01'),
    child_02 = document.getElementById('child_02'),
    phase_result = document.getElementById('phase_result'),
    target_result = document.getElementById('target_result');

parent.addEventListener('mouseover', function (e) {
    phase_result.innerHTML =    '"mouseover" event was triggered by element with id ' + e.target.id + '<br />' 
                                + 'But bind on element with id ' + e.currentTarget.id;
}, false);
child_01.addEventListener('mouseout', function (e) {
    target_result.innerHTML = "Flied over element after cursor be on child_01: " + e.relatedTarget.id;
}, false);
child_02.addEventListener('mouseover', function (e) {
    target_result.innerHTML = "Leaved element before cursor be on child_02: " + e.relatedTarget.id;
}, false);

var position = document.getElementById('position');
document.addEventListener('mousemove', function (e) {
    position.innerHTML = 'Cursor position: (' + e.clientX + ', ' + e.clientY + ')';
}, false);

var down = document.getElementById('down'), 
    press = document.getElementById('press'), 
    up = document.getElementById('up');
document.addEventListener('keydown', function (e) {
    down.innerHTML = e.keyCode;
}, false);
document.addEventListener('keypress', function (e) {
    press.innerHTML = String.fromCharCode(e.keyCode) + ' (' + e.keyCode + ')';
}, false);
document.addEventListener('keyup', function (e) {
    up.innerHTML = e.keyCode;
}, false);

var link = document.getElementById('link');
link.addEventListener('click', function (e) {
    e.preventDefault();
    alert('You clicked!');
}, false);