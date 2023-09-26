// Array of episode objects. You can update this array whenever you have a new episode.
const episodes = [
    {number: 2, title: 'Second Episode', description: 'Description of the second episode', src: 'episode2.mp3', spotify: 'https://open.spotify.com/embed/episode/0ax1sBKJ1ombOYGwWl0hEq?utm_source=generator'},
    {number: 1, title: 'The Evolution of Computing', description: 'Join me in the first episode of Byte Sized Tech as we journey through the evolution of computing! Discover the innovations and pioneers that transformed simple counting tools like the abacus into today\'s powerful computers. Whether you\'re tech-curious or a seasoned enthusiast, hop in to explore the fascinating milestones that have shaped our technological landscape!', src: 'episode1.mp3', spotify: 'https://open.spotify.com/embed/episode/6S1zMv2hltsyg2i8lJrz73?utm_source=generator'},
    {number: 3, title: 'Third Episode', description: 'Description of the second episode', src: 'episode2.mp3', spotify: 'https://open.spotify.com/embed/episode/0ax1sBKJ1ombOYGwWl0hEq?utm_source=generator'},
    {number: 4, title: 'Fourth Episode', description: 'Description of the second episode', src: 'episode2.mp3', spotify: 'https://open.spotify.com/embed/episode/0ax1sBKJ1ombOYGwWl0hEq?utm_source=generator'},
    {number: 5, title: 'Fifth Episode', description: 'Description of the second episode', src: 'episode2.mp3', spotify: 'https://open.spotify.com/embed/episode/0ax1sBKJ1ombOYGwWl0hEq?utm_source=generator'},
    {number: 6, title: 'Sixth Episode', description: 'Description of the second episode', src: 'episode2.mp3', spotify: 'https://open.spotify.com/embed/episode/0ax1sBKJ1ombOYGwWl0hEq?utm_source=generator'},
    {number: 7, title: 'Seventh Episode', description: 'Description of the second episode', src: 'episode2.mp3', spotify: 'https://open.spotify.com/embed/episode/0ax1sBKJ1ombOYGwWl0hEq?utm_source=generator'}
    // Add more episodes as needed
];

episodes.sort((a, b) => b.number - a.number);

const latestEpisodeSection = document.getElementById('latest-episode');
const previousEpisodesSection = document.getElementById('previous-episodes');

const latestEpisode = episodes[0];
const latestEpisodeArticle = createEpisodeArticle(latestEpisode);
latestEpisodeSection.appendChild(latestEpisodeArticle);

for (let i = 1; i < episodes.length; i++) {
    const episodeArticle = createEpisodeArticle(episodes[i]);
    episodeArticle.classList.add('hidden-episode');
    previousEpisodesSection.appendChild(episodeArticle);
}

for (let i = 1; i <= 4 && i < episodes.length; i++) {
    document.querySelector(`#previous-episodes article:nth-child(${i + 1})`).classList.remove('hidden-episode');
}

document.getElementById('show-more-btn').addEventListener('click', function() {
    window.location.href = 'all-episodes.html'; // Update with your actual URL
});


// Function to create an episode article element
function createEpisodeArticle(episode) {
    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    h3.textContent = `Episode ${episode.number}: ${episode.title}`;
    const p = document.createElement('p');
    p.textContent = episode.description;

    if (episode.spotify) {
        const iframe = document.createElement('iframe');
        iframe.src = episode.spotify;
        iframe.width = "100%";
        iframe.height = "80";
        iframe.frameBorder = "0";
        iframe.allowtransparency = "true";
        iframe.allow = "encrypted-media";
        article.appendChild(iframe);
    } else {
        const audio = document.createElement('audio');
        audio.controls = true;
        audio.src = episode.src;
        article.appendChild(audio);
    }
    
    article.appendChild(h3);
    article.appendChild(p);

    article.setAttribute('data-episode-number', episode.number); // Set the data attribute

    article.id = `episode${episode.number}`; // Set the id for the article
    return article;
}



document.getElementById('search-input').addEventListener('input', function(e) {
    const term = e.target.value.toLowerCase();
    const resultsDiv = document.getElementById('search-results');
    resultsDiv.innerHTML = '';

    if (term) {
        const results = episodes.filter(episode => episode.title.toLowerCase().includes(term) || episode.description.toLowerCase().includes(term));
        
        results.forEach(episode => {
            const resultDiv = document.createElement('div');
            resultDiv.textContent = `Episode ${episode.number}: ${episode.title}`;
            resultDiv.addEventListener('click', function() {
                window.location.href = `all-episodes.html#episode${episode.number}`;
            });
            resultsDiv.appendChild(resultDiv);
        });
        
    }
});
