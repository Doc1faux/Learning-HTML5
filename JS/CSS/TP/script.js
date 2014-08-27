var dragging = false;
var target;

document.addEventListener('mousedown', function (e) {
    if (e.target.className == 'draggableBox') {
        target = e.target;
        dragging = true;
    }
}, true);

document.addEventListener('mousemove', function (e) {
    if (dragging == true) {
        target.style.left = e.clientX + 'px';
        target.style.top = e.clientY + 'px';
    }
}, true);

document.addEventListener('mouseup', function (e) {
    dragging = false;
}, true);