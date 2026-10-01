// Bouton inscription
document.getElementById("inscription").addEventListener("click", function () {
    alert("Bienvenue sur Khedma !");
});


// Bouton professionnel
document.getElementById("proBtn").addEventListener("click", function () {
    alert("Recherche d'un professionnel...");
});


// Bouton emploi
document.getElementById("emploiBtn").addEventListener("click", function () {
    alert("Recherche d'un emploi...");
});


// Menu actif
const links = document.querySelectorAll("nav a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        links.forEach(function(item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});