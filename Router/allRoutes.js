import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),];
    new Route("/projets", "Projets", "/pages/projets.html"),;
    new Route("/apropos", "A propos", "/pages/apropos.html"),;
    new Route("/contact", "Contact", "/pages/contact.html"),;
    new Route("/moncompte", "Mon compte", "/pages/moncompte.html"),;
    new Route("/login", "Connexion/Deconnexion", "/pages/login.html"),;]

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Allo la Terre";