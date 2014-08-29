var storage = {};

document.addEventListener('mousedown', function (e) {
    if (e.target.className == 'draggableBox') {
        storage.target = e.target;
        storage.offsetX = e.clientX - e.target.offsetLeft;
        storage.offsetY = e.clientY - e.target.offsetTop;
    }
}, true);

document.addEventListener('mousemove', function (e) {
    if (storage.target) {
        storage.target.style.left = (e.clientX - storage.offsetX) + 'px';
        storage.target.style.top = (e.clientY - storage.offsetY) + 'px';
    }
}, true);

document.addEventListener('mouseup', function (e) {
    storage = {};
}, true);