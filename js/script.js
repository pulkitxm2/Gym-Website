   
document.onkeydown = function(e) {
if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {//Alt+c, Alt+v will also be disabled sadly.
alert('not allowed');
}
return false;
};
document.onkeydown = function(e) {
if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {//Alt+c, Alt+v will also be disabled sadly.
return false;
}
return false;
};
document.addEventListener('contextmenu', event => event.preventDefault());
document. addEventListener("keydown", function (event) {
if (event. ctrlKey) {
event. preventDefault();
}
});


