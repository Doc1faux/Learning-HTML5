var text = document.getElementById('text');
text.addEventListener('focus', function (e) {
    e.target.value = 'You have focus!';
}, true);
text.addEventListener('blur', function (e) {
    e.target.value = 'You do not have focus!';
}, true);

var text_disabled = document.getElementById('text_disabled');
text_disabled.disabled = true;

function check() {
    var inputs = document.getElementsByTagName('input'),
        inputsLength = inputs.length;
    
    for (var i = 0 ; i < inputsLength ; i++) {
        if (inputs[i].type == 'radio' && inputs[i].checked) {
            alert('Checked box is '+ inputs[i].value);
        }
    }
}

var list = document.getElementById('list');
console.log(list);
list.addEventListener('change', function () {
    alert(list.options[list.selectedIndex].innerHTML);
}, true);

var myForm = document.getElementById('myForm');
myForm.addEventListener('submit', function (e) {
    alert('You have sent the form!\nBut it has been blocked, so you stay on this page.');
    e.preventDefault();
}, true);
myForm.addEventListener('reset', function (e) {
    alert('You have reset the form');
}, true);