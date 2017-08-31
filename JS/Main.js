var chatbot = document.getElementById("chatbot");
var rainbow = false;
var asked = false;
var cColor = 1;
var open = false;
var open2 = false;
var error = false;

//Chatbot script

if(window.innerWidth <= 800 && window.innerHeight <= 600) {
	chatbot.style.height = "162";
   }

 function handle(e){
        if(e.keyCode === 13){
          send();
        }
    }

var status = 0;

var ocd = document.getElementById("ocd");
var ocd2 = document.getElementById("ocd2");
var chatbot = document.getElementById("chatbot");
var his = document.getElementById("his");
var text = document.getElementById("chat");
var name = document.getElementById("name").value;
var nul = "";

function send() {
if (text.value != nul) {
name = document.getElementById("name").value;
if (name == nul) {
name = "YOU";
}

var t = document.createTextNode("[" + name + "] " + text.value);
var b = document.createElement("br");
his.appendChild(t);
his.appendChild(b);

if (text.value == "hello" || text.value == "hi" || text.value == "helo" || text.value == "hey" || text.value == "heya") {
if (name != "YOU") {
var t = document.createTextNode("[BOT] Hello " + name + "!");
var b = document.createElement("br");
his.appendChild(t);
his.appendChild(b);
} else {
var t = document.createTextNode("[BOT] Hello User!");
var b = document.createElement("br");
his.appendChild(t);
his.appendChild(b);
}
} else if (text.value == "are you real" || text.value == "are u real" || text.value == "r you real" || text.value == "r u real" || text.value == "are you a real person?" || text.value == "are you real?" || text.value == "are u real?" || text.value == "r you real?" || text.value == "r u real?" || text.value == "are you a real person") {
var t = document.createTextNode("[BOT] No im not real. Im just here to help you!");
var b = document.createElement("br");
his.appendChild(t);
his.appendChild(b);
} else if (text.value == "games") {
var t = document.createTextNode("[BOT] Online or Downloadable?");
var b = document.createElement("br");

his.appendChild(t);
his.appendChild(b);

asked = true;

} else if (text.value == "online" && asked == true || text.value == "Online" && asked == true) {

var t = document.createTextNode("[BOT] Theese are some of our Online games!");
var b = document.createElement("br");

his.appendChild(t);
his.appendChild(b);

login();
asked = false;

} else if (text.value == "Downloadable" && asked == true || text.value == "downloadable" && asked == true) {
var t = document.createTextNode("[BOT] Theese are some of our Downloadable games!");
var b = document.createElement("br");

his.appendChild(t);
his.appendChild(b);
about();
asked = false;
} else if (text.value == "clear") {

clear();

} else if (text.value == "Who made you" || text.value == "who made you" || text.value == "Who made u" || text.value == "who made u" || text.value == "Who made you?" || text.value == "who made you?" || text.value == "Who made u?" || text.value == "who made u?") {
var t = document.createTextNode("[BOT] Oggy and Spoody made me.");
var g = document.createTextNode("contact them with 'contact us'");
var b = document.createElement("br");

his.appendChild(t);
his.appendChild(b);
his.appendChild(g);
} else if (text.value == "color") {
var t = document.createTextNode("[BOT] You can change the");
var c = document.createElement("br");
var g = document.createTextNode("current color. its currently " + cColor);
var b = document.createElement("br");

his.appendChild(t);
his.appendChild(b);
his.appendChild(g);
his.appendChild(c);
} else if (text.value == "color 2") {
cColor = 2;
var t = document.createTextNode("[BOT] You changed the color");
var c = document.createElement("br");
var g = document.createTextNode("current color is now " + cColor + " or red");
var b = document.createElement("br");

his.appendChild(t);
his.appendChild(b);
his.appendChild(g);
his.appendChild(c);
chatbot.style.backgroundColor = "#ff4444";
} else if (text.value == "color 3") {
cColor = 3;
var t = document.createTextNode("[BOT] You changed the color");
var c = document.createElement("br");
var g = document.createTextNode("current color is now " + cColor + " or green");
var b = document.createElement("br");

his.appendChild(t);
his.appendChild(b);
his.appendChild(g);
his.appendChild(c);
chatbot.style.backgroundColor = "44ff44";
} else if (text.value == "color 4") {
cColor = 4;
var t = document.createTextNode("[BOT] You changed the color");
var c = document.createElement("br");
var g = document.createTextNode("current color is now " + cColor + " or blue");
var b = document.createElement("br");

his.appendChild(t);
his.appendChild(b);
his.appendChild(g);
his.appendChild(c);
chatbot.style.backgroundColor = "#4444ff";
} else if (text.value == "color 1") {
cColor = 1;
var t = document.createTextNode("[BOT] You changed the color");
var c = document.createElement("br");
var g = document.createTextNode("current color is now " + cColor + " or gray");
var b = document.createElement("br");

his.appendChild(t);
his.appendChild(b);
his.appendChild(g);
his.appendChild(c);
chatbot.style.backgroundColor = "#444444";
} else if (text.value == "help") {
var a = document.createTextNode("Commands:");
var b2 = document.createElement("br");
var aa = document.createTextNode("- Color [1-4]");
var b3 = document.createElement("br");
var ab = document.createTextNode("- Clear");
var br = document.createElement("br");
var b = document.createTextNode("Dynamic answers:");
var b4 = document.createElement("br");
var ba = document.createTextNode("- games");
var b5 = document.createElement("br");
var bb = document.createTextNode("- hello/hi");
var b6 = document.createElement("br");

his.appendChild(a);
his.appendChild(b2);
his.appendChild(aa);
his.appendChild(b3);
his.appendChild(ab);
his.appendChild(br);
his.appendChild(b);
his.appendChild(b4);
his.appendChild(ba);
his.appendChild(b5);
his.appendChild(bb);
his.appendChild(b6);

} else {
var answer = Math.floor((Math.random() * 10) + 1);
}

if (answer == 1) {
var t = document.createTextNode("[BOT] Hello User!");
var b = document.createElement("br");
his.appendChild(t);
his.appendChild(b);
} else if (answer == 2) {
var t = document.createTextNode("[BOT] Im glad you asked!");
var b = document.createElement("br");
his.appendChild(t);
his.appendChild(b);
} else if (answer == 3) {
var t = document.createTextNode("[BOT] See progress in the log!");
var b = document.createElement("br");
his.appendChild(t);
his.appendChild(b);
} else if (answer == 4) {
var t = document.createTextNode("[BOT] I AM AUTONEMOUS!!");
var b = document.createElement("br");
his.appendChild(t);
his.appendChild(b);
} else if (answer == 5) {
var t = document.createTextNode("[BOT] Unsubscribe to alexfarlig NOW!!!!111!");
var b = document.createElement("br");
his.appendChild(t);
his.appendChild(b);
} else if (answer == 6) {
var t = document.createTextNode("[BOT] chocolate cake is way");
var t2 = document.createTextNode("better than strawberry icecream!!");
var b = document.createElement("br");
his.appendChild(t);
his.appendChild(b);
his.appendChild(t2);
} else if (answer == 7) {
var t = document.createTextNode("[BOT] My name is Jeff!");
var b = document.createElement("br");
his.appendChild(t);
his.appendChild(b);
} else if (answer == 8) {
var t = document.createTextNode("[BOT] Nobody earns from nobody's work!");
var b = document.createElement("br");
his.appendChild(t);
his.appendChild(b);
} else if (answer == 9) {
var t = document.createTextNode("[BOT] Pi loves Pie but Pie doesen't love Pi!");
var b = document.createElement("br");
his.appendChild(t);
his.appendChild(b);
} else if (answer == 10) {
var t = document.createTextNode("[BOT] i am random :P");
var b = document.createElement("br");
his.appendChild(t);
his.appendChild(b);
}


function clear() {
for (x = 0; x <= 1000; x++) {
var b = document.createElement("br");
his.appendChild(b);
}
}

text.value = "";

var b = document.createElement("br");
his.appendChild(b);

his.scrollTop = his.scrollHeight;
chatbot.scrollTop = chatbot.scrollHeight;

var b = document.createElement("br");

} else {
alert("please type something!");
}
}

function moof() {

if (status == 0) {
chatbot.style.bottom = "0px";
ocd2.innerHTML = "▼";
ocd2.style.right = "1";
status++
} else if (status == 1) {
chatbot.style.bottom = "-150px";
ocd2.innerHTML = "▲";
ocd2.style.right = "1";
status++
} else if (status >= 2) {
status = 0;
chatbot.style.bottom = "0px";
ocd2.innerHTML = "▼";
ocd2.style.right = "1";
status++
}
}
//chatbot script end

var online = navigator.onLine;

var pka = document.getElementById("pka");

var log = document.getElementById("log");

var pka = document.getElementById("pka");

var btn = document.getElementById("login");

var btn2 = document.getElementById("bout");
var bout = document.getElementById("about");

var dark = document.getElementById("dark");

var test =  document.getElementById("test");

/*pka.onclick = function() {nu()}

function nu() {
alert("not working rn");
}*/

btn.onclick = function() {login()};

dark.onclick = function() {close()};

log.onclick = function() {log()};

btn2.onclick = function() {about()};

function login() {


if (open == false) {
test.style.display = "block";
dark.style.display = "block";

document.getElementById("dark").style.backgroundColor = "#000000";
document.getElementById("dark").style.opacity = "0.25";
open = true;

} else {

test.style.display = "none";
dark.style.display = "none";

open = false

}

}

function close() {

test.style.display = "none";
dark.style.display = "none";
bout.style.display = "none";

open = false
open2 = false

}

function log() {

var naem = document.getElementById("name").value;

var pass = document.getElementById("password").value;

if (naem == "admin") {
window.location = "http://zochg.ga";

} else {

alert("wrong");

}
}

function about() {


if (open2 == false) {
bout.style.display = "block";
dark.style.display = "block";


document.getElementById("dark").style.backgroundColor = "#000000";
document.getElementById("dark").style.opacity = "0.25";

open2 = true;

} else {

bout.style.display = "none";
dark.style.display = "none";

open2 = false

}

}

var err = document.getElementById("errDesc");

if (error == true) {

test.style.display = "none";
bout.style.display = "none";

document.getElementById("error").style.display = "block";
document.getElementById("darke").style.display = "block";
err.innerHTML = "an error has occured";
}

//login script
function enter() {
	var username = prompt("Input username");
	var password = prompt("Input password");
	
	if (username == "admin" && password == "wordpass123") {
		alert("Logged in");
		
		document.cookie = "logged in=1"
		document.getElementById("edit").style.display = "block";
	} else if (confirm("Wrong login! Try again.")){
		enter();
	}
}

//anti right clicker/
document.addEventListener('contextmenu', event => event.preventDefault());
