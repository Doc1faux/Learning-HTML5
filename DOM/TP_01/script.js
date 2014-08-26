// TP 1
var wwwc = document.createElement('strong');
wwwc.appendChild(document.createTextNode('World Wide Web Consortium'));

var w3c = document.createElement('strong');
w3c.appendChild(document.createTextNode('W3C'));

var normOrgLink = document.createElement('a');
normOrgLink.href = 'http://fr.wikipedia.org/wiki/Organisme_de_normalisation';
normOrgLink.title = 'Organisme de normalisation';
normOrgLink.textContent = 'organisme de standardisation';

var wwwLink = document.createElement('a');
wwwLink.href = 'http://fr.wikipedia.org/wiki/World_Wide_Web';
wwwLink.title = 'World Wide Web';
wwwLink.appendChild(document.createTextNode('World Wide Web'));

var div = document.createElement('div');
div.id = 'divTP1';
div.appendChild(document.createTextNode('Le'));
div.appendChild(wwwc);
div.appendChild(document.createTextNode(', abrégé par le sigle '));
div.appendChild(w3c);
div.appendChild(document.createTextNode(', est un '));
div.appendChild(normOrgLink);
div.appendChild(document.createTextNode(' à but non-lucratif chargé de promouvoir la compatibilité des technologies du '));
div.appendChild(wwwLink);
div.appendChild(document.createTextNode('.'));

document.body.appendChild(div);

// TP 2
var textNodeContent = ['Langages basées sur ECMAScript :',
                       'JScript',
                       'JavaScript',
                       'ActionScript',
                       'EX4'];

var paragraph = document.createElement('p');
paragraph.appendChild(document.createTextNode(textNodeContent[0]));

var list = document.createElement('ul');
for (var i = 1, c = 5; i < c; i++) {
    var elem = document.createElement('li');
    elem.appendChild(document.createTextNode(textNodeContent[i]));
    list.appendChild(elem);
}

var div = document.createElement('div');
div.id = 'divTP2';
div.appendChild(paragraph);
div.appendChild(list);

document.body.appendChild(div);

// TP 3
var terms = ['JavaScript',
             'JScript',
             'ActionScript',
             'EX4'];

var defs = ['JavaScript est un langage de programmation de scripts principalement utilisé dans les pages web interactives mais aussi coté serveur.',
            "JScript est le nom générique de plusieurs implémentations d'ECMAScript 3 créées par Microsoft.",
            "ActionScript est le langage de programmation utilisé au sein d'applications clientes (Adobe Flash, Adobe Flex) et serveur (Flash media server, JRun, Macromedia Generator).",
            'ECMAScript for XML (E4X) est une extension XML au langage ECMAScript.'];

var paragraph = document.createElement('p');
paragraph.appendChild(document.createTextNode('Langages basées sur ECMAScript :'));

var list = document.createElement('dl');
for (var i = 0, c = terms.length; i < c; i++) {
    var term = document.createElement('dt');
    term.appendChild(document.createTextNode(terms[i]));
    list.appendChild(term);
    
    var def = document.createElement('dd');
    def.appendChild(document.createTextNode(defs[i]));
    list.appendChild(def);
}

var div = document.createElement('div');
div.id = 'divTP3';
div.appendChild(paragraph);
div.appendChild(list);

document.body.appendChild(div);

// TP 4
// Form
var label = document.createElement('label');
label.htmlFor = 'inputLoad';
label.appendChild(document.createTextNode('Image à uploader :'));

var fileInput = document.createElement('input');
fileInput.id = 'inputUpload'
fileInput.type = 'file';
fileInput.name = 'inputUpload';

var br = document.createElement('br');

var submitInput = document.createElement('input');
submitInput.type = 'submit';
submitInput.value = 'Envoyer';

var formDiv = document.createElement('div');
formDiv.style = 'text-align: center';

formDiv.appendChild(label);
formDiv.appendChild(fileInput);
formDiv.appendChild(br); formDiv.appendChild(br);
formDiv.appendChild(submitInput);

var legend = document.createElement('legend');
legend.appendChild(document.createTextNode('Uploader une image'));

var field = document.createElement('fieldset');

field.appendChild(legend);
field.appendChild(formDiv);

var form = document.createElement('form');
form.enctype = 'multipart/form-data';
form.method = 'post';
form.action = 'upload.php';

form.appendChild(field);

var mainDiv = document.createElement('div');
mainDiv.id = 'divTP4';

mainDiv.appendChild(form);

document.body.appendChild(mainDiv);











