"use strict";

var hello = function hello() {
    var input = document.getElementById('name');
    name = input.value !== "" ? input.value : "Père Noël";

    var message = document.getElementById('message');
    message.innerHTML = "Bonjour " + name + " !";
};

document.getElementById('button').onclick = hello;
