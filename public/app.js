let array = [];

const hello = () => {

    //Input name
    let input = document.getElementById('name').value;
    name = input !== "" ? input : "Père Noël";
    let maj = name.split('');
    maj[0] = maj[0].toUpperCase();
    let ok = maj.join('');
    array.push(ok)

    //message
    let message = document.getElementById('message');
    message.innerHTML = `Bonjour ${ok} !`;

    //List
    let li = document.createElement("li");
    li.innerHTML = ok;
    document.getElementById("list").append(li);

}

const search = () => {

    //Compare
    let nameSearch = document.getElementById('search').value;
    let maj = nameSearch.split('');
    maj[0] = maj[0].toUpperCase();
    let ok = maj.join('');
    let compare = array.filter(name => name.startsWith(ok));

    //Affiche
    let affiche = document.getElementById('nameSearch');
    affiche.innerHTML = compare;  
}

document.getElementById('button').onclick = hello;
document.getElementById('searchButton').onclick = search;

//Vider l'input text au click
let vide = document.getElementById('button');
vide.addEventListener('click', () => {
    document.getElementById("name").value = "";
});

//Vider l'input search au click
let vide1 = document.getElementById('searchButton');
vide1.addEventListener('click', () => {
    document.getElementById("search").value = "";
});



