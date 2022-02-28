const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data));

}

const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result');
    data.forEach(phone => {
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
            <img class="w-50 mx-auto" src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title text-center">Name: ${phone.phone_name}</h5>
                <p class="card-text text-center">Brand: ${phone.brand}</p>
                <div class="text-center">
                <button type="button" class="btn btn-danger ">Details...</button>
                </div>
            </div>
        </div>
        
        `;
        searchResult.appendChild(div);
    })
}