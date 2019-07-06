// connection



function _(x){
	return document.getElementById(x);
};
var myDate = new Date();

_('demo1').innerHTML = "Today is " + myDate.toDateString() + "<sub> courtesy of javascript</sub>";
