new window.VLibras.Widget('https://vlibras.gov.br/app');
    
function readText(text) {
    var texto = "127.0.0.1 deseja reproduzir discurso";
    responsiveVoice.speak(text, "Brazilian Portuguese Female"); // Altere para o idioma e o gênero de voz desejados
}

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const searchInput = document.getElementById('search');

    searchInput.addEventListener('input', function() {
        const searchTerms = this.value.trim().toLowerCase().split(' ');

        if (searchTerms.length === 0 || searchTerms[0] === '') {
            cards.forEach(function(card) {
                card.style.display = 'block';
            });
            return;
        }

        let found = false;

        cards.forEach(function(card) {
            const cardTitle = card.querySelector('.cardTitle').textContent.trim().toLowerCase();
            const cardTitleWords = cardTitle.split(' ');

            const allWordsMatch = searchTerms.every(function(term) {
                return cardTitleWords.some(function(word) {
                    return word.includes(term);
                });
            });

            if (allWordsMatch) {
                card.style.display = 'block';
                found = true;
            } else {
                card.style.display = 'none';
            }
        });

        const noResults = document.getElementById('noResults');
        if (found) {
            noResults.style.display = 'none';
        } else {
            noResults.style.display = 'block';
        }
    });
});
// Adiciona um ouvinte de evento de entrada de texto no campo de pesquisa
document.getElementById('search').addEventListener('input', handleSearchInput);