const users = [
{ username: "143021", password: "110207" },
{ username: "152846", password: "luanque" },
    { username: "usuario", password: "senha" },
    { username: "101870", password: "170406" },
    { username: "teste", password: "teste" },
    { username: "153026", password: "frederico" },


];

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert("Login bem-sucedido!");
        // Redirecionar após o login (exemplo)
        window.location.href = "menu.html";
    } else {
        alert("Credenciais inválidas. Tente novamente.");
    }
}
