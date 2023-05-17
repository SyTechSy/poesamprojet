// ======================= SEARCH DROPDOM =====================

// Pour activer 
let dropdomLink = document.getElementById('dropdom_link');
let searchDrop = document.getElementById('search_drop');
let fermeSearchDrop = document.getElementById('ferme_search_drop');

if(dropdomLink) {
    dropdomLink.addEventListener('click', () => {
        searchDrop.classList.add('active-searh_drop')
    })
}
// Pour desactiver 
if(fermeSearchDrop) {
    fermeSearchDrop.addEventListener('click', () => {
        searchDrop.classList.remove('active-searh_drop')
    })
}
