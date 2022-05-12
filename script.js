var searxContent = 
`
<div class="searx-logo-wrapper" id="logo-wrapper">
    <img class="searx-search-logo" id="search-logo" src="img/searx-logo.png" alt="" srcset="">
</div>
<div class="searx-search-wrapper" id="search-wrapper" >
    <a onclick="doSearch('searx')"><img class="searx-search-icon" id="search-icon" src="img/searx-icon.png" alt=""></a>
    <input class="searx-search-bar search-bar" id="search-bar" type="search" placeholder="Meta search" value="">
</div>
<div class="searx-search-engines" id="search-engines">
    <div class="searx-engine" id="engine">
        <a onclick="switchEngine('searx')" id="searx-engine"><img class="searx-engine searx" id="searx-engine-image" src="img/searx-icon.png" alt=""></a>
    </div>
    <div class="searx-engine" id="engine">
        <a onclick="switchEngine('duckduckgo')" id="duckduckgo-engine"><img class="searx-engine duckduckgo" id="duckduckgo-engine-image" src="img/duckduckgo-icon.png" alt=""></a>
    </div>
    <div class="searx-engine" id="engine">
        <a onclick="switchEngine('yandex')" id="yandex-engine"><img class="searx-engine yandex" id="yandex-engine-image" src="img/yandex-icon.png" alt=""></a>
    </div>
</div>
<script type="text/javascript" src="script.js"></script>
`
;
var duckduckgoContent = 
`
<div class="duckduckgo-logo-wrapper" id="logo-wrapper">
    <img class="duckduckgo-search-logo" id="search-logo" src="img/duckduckgo-logo.png" alt="" srcset="">
</div>
<div class="duckduckgo-search-wrapper" id="search-wrapper" >
    <a onclick="doSearch('duckduckgo')"><img class="duckduckgo-search-icon" id="search-icon" src="img/duckduckgo-icon.png" alt=""></a>
    <input class="duckduckgo-search-bar search-bar" id="search-bar" type="search" placeholder="Private search" value="">
</div>
<div class="duckduckgo-search-engines" id="search-engines">
    <div class="duckduckgo-engine" id="engine">
        <a onclick="switchEngine('searx')" id="searx-engine"><img class="duckduckgo-engine searx" id="searx-engine-image" src="img/searx-icon.png" alt=""></a>
    </div>
    <div class="searx-engine" id="engine">
        <a onclick="switchEngine('duckduckgo')" id="duckduckgo-engine"><img class="duckduckgo-engine duckduckgo" id="duckduckgo-engine-image" src="img/duckduckgo-icon.png" alt=""></a>
    </div>
    <div class="duckduckgo-engine" id="engine">
        <a onclick="switchEngine('yandex')" id="yandex-engine"><img class="duckduckgo-engine yandex" id="yandex-engine-image" src="img/yandex-icon.png" alt=""></a>
    </div>
</div>
<script type="text/javascript" src="script.js"></script>
`
;
var yandexContent =
`
<div class="yandex-logo-wrapper" id="logo-wrapper">
    <img class="yandex-search-logo" id="search-logo" src="img/yandex-logo.png" alt="" srcset="">
</div>
<div class="yandex-search-wrapper" id="search-wrapper" >
    <a onclick="doSearch('yandex')"><img class="yandex-search-icon" id="search-icon" src="img/yandex-icon.png" alt=""></a>
    <input class="yandex-search-bar search-bar" id="search-bar" type="search" placeholder="Image search" value="">
</div>
<div class="yandex-search-engines" id="search-engines">
    <div class="yandex-engine" id="engine">
        <a onclick="switchEngine('searx')" id="searx-engine"><img class="yandex-engine searx" id="searx-engine-image" src="img/searx-icon.png" alt=""></a>
    </div>
    <div class="searx-engine" id="engine">
        <a onclick="switchEngine('duckduckgo')" id="duckduckgo-engine"><img class="yandex-engine duckduckgo" id="duckduckgo-engine-image" src="img/duckduckgo-icon.png" alt=""></a>
    </div>
    <div class="yandex-engine" id="engine">
        <a onclick="switchEngine('yandex')" id="yandex-engine"><img class="yandex-engine yandex" id="yandex-engine-image" src="img/yandex-icon.png" alt=""></a>
    </div>
</div>
<script type="text/javascript" src="script.js"></script>
`
;

var body = (document.getElementsByTagName('body'))[0];
var titleLogo = document.getElementById('title-logo');

function setDefault(searchEngine) {
    console.log(searchEngine+' is default');
}

function switchEngine(searchEngine) {
    if (searchEngine=='searx') {
        body.className='searx-body-wrapper';
        body.innerHTML=searxContent;
        document.title='New Searx Tab';
        titleLogo.href='img/searx-icon.png';
        let searchIcon=document.getElementById('search-icon');
        let searchBar=document.getElementById('search-bar');
        let searchWrapper=document.getElementById('search-wrapper');
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
        searchBar.classList.add('selected-searx-bar');
        searchBar.style.color='rgb(65, 160, 230)';
        searchWrapper.addEventListener('mouseover', function() {
            searchWrapper.style.boxShadow='0 0.25rem 2.5rem rgb(65, 160, 230)';
        })
        searchWrapper.addEventListener('mouseout', function() {
            searchWrapper.style.boxShadow='0 0 0 0';
        })
    } else if (searchEngine=='duckduckgo') {
        body.className='duckduckgo-body-wrapper';
        body.innerHTML=duckduckgoContent;
        document.title='New DuckDuckGo Tab';
        titleLogo.href='img/duckduckgo-icon.png';
        let searchIcon=document.getElementById('search-icon');
        let searchBar=document.getElementById('search-bar');
        let searchWrapper=document.getElementById('search-wrapper');
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
        searchBar.classList.add('selected-duckduckgo-bar');
        searchBar.style.color='orangered';
        searchWrapper.addEventListener('mouseover', function() {
            searchWrapper.style.boxShadow='0 0.25rem 2.5rem orangered';
        })
        searchWrapper.addEventListener('mouseout', function() {
            searchWrapper.style.boxShadow='0 0 0 0';
        })
    } else {
        body.className='yandex-body-wrapper';
        body.innerHTML=yandexContent;
        document.title='New Yandex Tab';
        titleLogo.href='img/yandex-icon.png';
        let searchIcon=document.getElementById('search-icon');
        let searchBar=document.getElementById('search-bar');
        let searchWrapper=document.getElementById('search-wrapper');
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
        searchBar.classList.add('selected-yandex-bar');
        searchBar.style.color='yellow';
        searchWrapper.addEventListener('mouseover', function() {
            searchWrapper.style.boxShadow='0 0.25rem 2.5rem yellow';
        })
        searchWrapper.addEventListener('mouseout', function() {
            searchWrapper.style.boxShadow='0 0 0 0';
        })
    }
    let searxEngineImage=document.getElementById('searx-engine-image');
    let duckduckgoEngineImage=document.getElementById('duckduckgo-engine-image');
    let yandexEngineImage=document.getElementById('yandex-engine-image');
    searxEngineImage.addEventListener('mouseover', function() {
        searxEngineImage.style.boxShadow='0 0.25rem 2.5rem rgb(65, 160, 230)';
        searxEngineImage.src='img/searx-icon-flipped.png'
    })
    searxEngineImage.addEventListener('mouseout', function() {
        searxEngineImage.style.boxShadow='0 0 0 0';
        searxEngineImage.src='img/searx-icon.png'
    })
    duckduckgoEngineImage.addEventListener('mouseover', function() {
        duckduckgoEngineImage.style.boxShadow='0 0.25rem 2.5rem orangered';
        duckduckgoEngineImage.src='img/duckduckgo-icon-flipped.png'
    })
    duckduckgoEngineImage.addEventListener('mouseout', function() {
        duckduckgoEngineImage.style.boxShadow='0 0 0 0';
        duckduckgoEngineImage.src='img/duckduckgo-icon.png'
    })
    yandexEngineImage.addEventListener('mouseover', function() {
        yandexEngineImage.style.boxShadow='0 0.25rem 2.5rem yellow';
        yandexEngineImage.src='img/yandex-icon-flipped.png'
    })
    yandexEngineImage.addEventListener('mouseout', function() {
        yandexEngineImage.style.boxShadow='0 0 0 0';
        yandexEngineImage.src='img/yandex-icon.png'
    })
}

function searchWith(searchEngine, searchQuery) {
    if (searchEngine=='searx') {
        return 'https://swag.pw/search?q='+searchQuery;
    } else if (searchEngine=='duckduckgo') {
        return 'https://duckduckgo.com/?q='+searchQuery;
    } else {
        return 'https://yandex.com/images/search?text='+searchQuery;
    }
}
function doSearch(searchEngine) {
    let searchBar=document.getElementById('search-bar');
    let searchURL=searchWith(searchEngine, searchBar.value);
    window.open(searchURL, '_self');
}
