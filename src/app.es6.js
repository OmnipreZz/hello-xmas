const hello = () => {
    let input = document.getElementById('name');
    name = input.value !== "" ? input.value : "Père Noël";


    let message = document.getElementById('message');
    message.innerHTML = `Bonjour ${name} !`
}


document.getElementById('button').onclick = hello;