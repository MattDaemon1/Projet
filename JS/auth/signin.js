// Définir RoleCookieName quelque part dans votre code
const RoleCookieName = "accesstoken";

const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

// Fonction pour définir un token (à adapter selon vos besoins)
function setToken(token) {
    // Ici, vous pouvez définir le token dans une variable globale ou localStorage selon votre architecture
    // Exemple pour localStorage : localStorage.setItem('token', token);
}

function checkCredentials() {
    //Ici, il faudra appeler l'API pour vérifier les credentials en BDD

    if (mailInput.value == "test@mail.com" && passwordInput.value == "123") {
        //Il faudra récupérer le vrai token
        const token = "lkjsdngfljsqdnglkjsdbglkjqskjgkfjgbqslkfdgbskldfgdfgsdgf";
        setToken(token);
        //placer ce token en cookie

        setCookie(RoleCookieName, "admin", 7);
        window.location.replace("/");
    } else {
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}

// Fonction pour définir un cookie (assurez-vous de la sécuriser)
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}
