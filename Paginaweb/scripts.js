//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function escapeHtml(unsafeText) {
    let div = document.createElement('div');
    div.textContent = unsafeText;
    return div.innerHTML;
}

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let searchQuery = document.getElementById('searchInput').value;
    searchQuery = escapeHtml(searchQuery);  // Escapar la entrada del usuario

    console.log('Buscando: ' + searchQuery);
    
    // Procesar la búsqueda...
});
