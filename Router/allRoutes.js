import Route from "./Route.js";

// Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/projets", "Projets", "/pages/projets.html", []),
    new Route("/apropos", "A propos", "/pages/apropos.html", []),
    new Route("/moncompte", "Mon compte", "/pages/Auth/moncompte.html", ["client", "admin"]),
    new Route("/editPassword", "Modifier mot de passe", "/pages/Auth/editPassword.html", ["client", "admin"]),
    new Route("/signin", "Connexion", "/pages/Auth/signin.html", ["disconnected"], "/JS/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/Auth/signup.html", ["disconnected"], "/JS/auth/signup.js"),
    new Route("/mesdons", "Mes dons", "/pages/Dons/mesdons.html", ["client", "admin"]),
    new Route("/don", "Don", "/pages/Dons/don.html", ["client"]),
];

// Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Allo la Terre";
