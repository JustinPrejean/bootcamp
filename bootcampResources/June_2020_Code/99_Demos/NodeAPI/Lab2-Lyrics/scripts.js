let url = 'https://api.lyrics.ovh/v1';

function findLyrics() {
    let artist = document.getElementById('artist').value;
    let title = document.getElementById('title').value;
    document.getElementById('artist').value = "";
    document.getElementById('title').value = '';

    let lyricDisplay = document.getElementById('displayLyrics')

    fetch(`${url}/${artist}/${title}`)
    .then(function(response) {
        if(response.ok){
            return response.json();
        };
        throw Error;
    })
    .then(function(data) {
        let lyrics = data.lyrics;
        lyricDisplay.style.color = 'black';
        lyricDisplay.innerText = lyrics;
    })
    .catch(function(error){
        lyricDisplay.style.color = 'red';
        lyricDisplay.innerText = `No lyrics found. Try again.`;
    });
}