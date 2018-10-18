"use strict";

var array = [];

var hello = function hello() {

    //Input name
    var input = document.getElementById('name').value;
    name = input !== "" ? input : "Père Noël";
    var maj = name.split('');
    maj[0] = maj[0].toUpperCase();
    var ok = maj.join('');
    array.push(ok);

    //message
    var message = document.getElementById('message');
    message.innerHTML = "Bonjour " + ok + " !";

    //List
    var li = document.createElement("li");
    var list = document.getElementById('list');
    li.innerHTML = ok;
    document.getElementById("list").append(li);
};

document.getElementById('button').onclick = hello;
