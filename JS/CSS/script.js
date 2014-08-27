var myInStyledDiv = document.getElementById('myInStyledDiv');
alert("According to JS, this div's background color is " + myInStyledDiv.style.backgroundColor);

// getComputedStyle() values are read-only!
var myOutStyledDiv = document.getElementById('myOutStyledDiv');
alert("According to JS, this div's background color is " + getComputedStyle(myOutStyledDiv, null).backgroundColor);

myOutStyledDiv.offsetWidth;     // width + padding + border
myOutStyledDiv.offsetHeight;    // height + padding + border
myOutStyledDiv.offsetLeft;      // position regarding top-border of parent element
myOutStyledDiv.offsetTop;       // position regarding left-border of parent element
myOutStyledDiv.offsetParent;    // parent