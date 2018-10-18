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
    let list = document.getElementById('list');
    li.innerHTML = ok;
    document.getElementById("list").append(li);
}


document.getElementById('button').onclick = hello;