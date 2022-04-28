var searchWrapper=document.getElementById('search-wrapper');
var searchIcon=document.getElementById('search-icon');
var searchBar=document.getElementById('search-bar');
var searxEngineImage=document.getElementById('searx-engine-image');
var duckduckgoEngineImage=document.getElementById('duckduckgo-engine-image');
var yandexEngineImage=document.getElementById('yandex-engine-image');
var tabTitle=document.getElementById('title').innerText;

function searchWith(searchEngine, searchQuery) {
    if (searchEngine=='searx') {
        return 'https://swag.pw/search?q='+searchQuery;
    } else if (searchEngine=='duckduckgo') {
        return 'https://duckduckgo.com/?q='+searchQuery;
    } else {
        return 'https://yandex.com/images/search?text='+searchQuery;
    }
}

if (tabTitle=='New Searx Tab') {
    searchBar.addEventListener('mouseover', function() {
        searchBar.placeholder='Type something...';
        searchBar.focus();
    })
    searchBar.addEventListener('mouseout', function() {
        searchBar.placeholder='Meta search';
    })
    searchBar.addEventListener('keypress', function(e) {
        if (e.key==='Enter') {
            doSearch('searx');
        }
    })
    searchIcon.addEventListener('mouseover', function() {
        searchIcon.src='img/searx-icon-flipped.png';
    })
    searchIcon.addEventListener('mouseout', function(){
        searchIcon.src='img/searx-icon.png';
    })
} else if (tabTitle=='New DuckDuckGo Tab') {
    searchBar.addEventListener('mouseover', function() {
        searchBar.placeholder='Type something...';
        searchBar.focus();
    })
    searchBar.addEventListener('mouseout', function() {
        searchBar.placeholder='Private search';
    })
    searchBar.addEventListener('keypress', function(e) {
        if (e.key==='Enter') {
            doSearch('duckduckgo');
        }
    })
    searchIcon.addEventListener('mouseover', function() {
        searchIcon.src='img/duckduckgo-icon-flipped.png';
    })
    searchIcon.addEventListener('mouseout', function(){
        searchIcon.src='img/duckduckgo-icon.png';
    })
} else {
    searchBar.addEventListener('mouseover', function() {
        searchBar.placeholder='Type something...';
        searchBar.focus();
    })
    searchBar.addEventListener('mouseout', function() {
        searchBar.placeholder='Image search';
    })
    searchBar.addEventListener('keypress', function(e) {
        if (e.key==='Enter') {
            doSearch('yandex');
        }
    })
    searchIcon.addEventListener('mouseover', function() {
        searchIcon.src='img/yandex-icon-flipped.png';
    })
    searchIcon.addEventListener('mouseout', function(){
        searchIcon.src='img/yandex-icon.png';
    })
}

searchWrapper.addEventListener('mouseover', function() {
    searchWrapper.style.boxShadow='0 0.25rem 1rem rgba(255, 255, 255, 0.589)';
})
searchWrapper.addEventListener('mouseout', function() {
    searchWrapper.style.boxShadow='0 0 0 0';
})

searxEngineImage.addEventListener('mouseover', function() {
    searxEngineImage.style.boxShadow='0 0.25rem 1rem rgba(255, 255, 255, 0.589)';
    searxEngineImage.src='img/searx-icon-flipped.png'
})
searxEngineImage.addEventListener('mouseout', function() {
    searxEngineImage.style.boxShadow='0 0 0 0';
    searxEngineImage.src='img/searx-icon.png'
})
duckduckgoEngineImage.addEventListener('mouseover', function() {
    duckduckgoEngineImage.style.boxShadow='0 0.25rem 1rem rgba(255, 255, 255, 0.589)';
    duckduckgoEngineImage.src='img/duckduckgo-icon-flipped.png'
})
duckduckgoEngineImage.addEventListener('mouseout', function() {
    duckduckgoEngineImage.style.boxShadow='0 0 0 0';
    duckduckgoEngineImage.src='img/duckduckgo-icon.png'
})
yandexEngineImage.addEventListener('mouseover', function() {
    yandexEngineImage.style.boxShadow='0 0.25rem 1rem rgba(255, 255, 255, 0.589)';
    yandexEngineImage.src='img/yandex-icon-flipped.png'
})
yandexEngineImage.addEventListener('mouseout', function() {
    yandexEngineImage.style.boxShadow='0 0 0 0';
    yandexEngineImage.src='img/yandex-icon.png'
})

function doSearch(searchEngine) {
    let searchURL=searchWith(searchEngine, searchBar.value);
    window.open(searchURL, '_self');
}
