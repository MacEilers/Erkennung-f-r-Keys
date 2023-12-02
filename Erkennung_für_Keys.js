document.onkeydown = checkKeycode

function checkKeycode(e) {
var keycode;
if (window.event)
	{keycode = window.event.keyCode;}
else if (e)
	{keycode = e.which;}
alert("keycode: " + keycode);
}


// Links 37
// Rechts 39
// GO 38
// Back 40
