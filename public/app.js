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
    li.innerHTML = ok;
    document.getElementById("list").append(li);
};

var search = function search() {

    //Compare
    var nameSearch = document.getElementById('search').value;
    var maj = nameSearch.split('');
    maj[0] = maj[0].toUpperCase();
    var ok = maj.join('');
    var compare = array.filter(function (name) {
        return name.startsWith(ok);
    });

    //Affiche
    var affiche = document.getElementById('nameSearch');
    affiche.innerHTML = compare;
};

document.getElementById('button').onclick = hello;
document.getElementById('searchButton').onclick = search;

//Vider l'input text au click
var vide = document.getElementById('button');
vide.addEventListener('click', function () {
    document.getElementById("name").value = "";
});

//Vider l'input search au click
var vide1 = document.getElementById('searchButton');
vide1.addEventListener('click', function () {
    document.getElementById("search").value = "";
});
