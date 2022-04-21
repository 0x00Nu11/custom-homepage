searchWrapper=document.getElementById('search-wrapper');
searchBar=document.getElementById('search-bar');
searxIcon=document.getElementById('searx-icon');

searchWrapper.addEventListener('mouseover', function() {
    searchWrapper.style.boxShadow='0 0.25rem 1rem rgba(255, 255, 255, 0.589)';
})
searchWrapper.addEventListener('mouseout', function() {
    searchWrapper.style.boxShadow='0 0 0 0';
})

searxIcon.addEventListener('mouseover', function() {
    searxIcon.src='img/searx-icon-flipped.png';
})
searxIcon.addEventListener('mouseout', function() {
    searxIcon.src='img/searx-icon.png';
})

searchBar.addEventListener('mouseover', function() {
    searchBar.placeholder='Search...';
    searchBar.focus();
})
searchBar.addEventListener('mouseout', function() {
    searchBar.placeholder='Search';
})
searchBar.addEventListener('keypress', function(e) {
    if (e.key==='Enter'){
        doSearch();
    }
})

function doSearch() {
    let searchURL='https://swag.pw/search?q='+searchBar.value
    +'&language=en-US&time_range=None&safesearch=0&categories=general';
    window.open(searchURL, '_self');
    searxIcon.src='img/searx-icon-flipped.png';
    searchBar.value='';
}