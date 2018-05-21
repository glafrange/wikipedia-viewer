const searchBar = document.getElementById('search-bar');
const searchList = document.getElementById('search-list')

function searchApi(searchText) {
    const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=';
    fetch(url + searchText)
        .then(function(res) {
            return res.json();
        })
        .then(res => displaySearch(res))
        .catch(function(err) {
            return err;
        });
}

function displaySearch(res) {
    console.log(res);
    searchList.innerHTML = ''
    for(const i in res[1]){
        searchList.innerHTML += "<div class='search-item'><h1 class='search-header color-black'>" + res[1][i] + "</h1><p class='search-body color-black'>" + res[2][i] + "</p><a class='search-link color-black' target='_blank' href='" + res[3][i] + "'>" + "wiki" + "</a></div>";
    }
    searchList.style.display = 'block';
}
