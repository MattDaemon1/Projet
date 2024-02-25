import Route from "./Route.js";

// Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/projets", "Projets", "/pages/projets.html"),
    new Route("/apropos", "A propos", "/pages/apropos.html"),
    new Route("/contact", "Contact", "/pages/contact.html"),
    new Route("/moncompte", "Mon compte", "/pages/Auth/moncompte.html"),
    new Route("/signin", "Connexion", "/pages/Auth/signin.html"),
    new Route("/signup", "Inscription", "/pages/Auth/signup.html", "/JS/auth/signup.js"),
    new Route("/mesdons", "Mes dons", "/pages/Dons/mesdons.html"),
    new Route("/don", "Don", "/pages/Dons/don.html"),
];

// Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Allo la Terre";
