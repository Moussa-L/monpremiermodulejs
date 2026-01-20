/**
 * generateHeure est module qui permet de générer une heure automatiquement
 */

//Je déclare une fonction qui retourne l'heure
function monHeure() {
    // Je crée une nouvelle instance de la date actuelle
    let date = new Date();

    // J'extrais les heures de la date
    let heure = date.getHours();

    // J'extrais les minutes de la date
    let minute = date.getMinutes();
    
    // J'extrais les secondes de la date
    let seconde = date.getSeconds();

    // J'affiche un message dans la console avec l'heure, les minutes et les secondes
    console.log("### Coucou, je passe à la télé à ", heure, ":", minute, ":", seconde, "###");
    
    // Je retourne un objet contenant les heures, minutes et secondes
    return { heure, minute, seconde };
}

//Exporter ou exposer la fonction monHeure () parce que je veux rendre la fonction acccessible depuis un autre fichier JS
export default { 
    monHeure 
};