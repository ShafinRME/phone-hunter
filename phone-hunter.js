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
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
            <img class="w-50 mx-auto" src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title text-center">Name: ${phone.phone_name}</h5>
                <p class="card-text text-center">Brand: ${phone.brand}</p>
                <div class="text-center">
                <button onclick="loadMealDetail('${phone.slug}')" type="button" class="btn btn-danger ">Details...</button>
                </div>
            </div>
        </div>
        
        `;
        searchResult.appendChild(div);
    })
}

const loadMealDetail = phoneId => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => disPlayPhoneDetail(data.data));
}

const disPlayPhoneDetail = phone => {
    console.log(phone);
    const phoneDetails = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img class="w-50 mx-auto my-4" src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Brand: ${phone.brand}</h5>
                <p class="card-text">Realease Date: ${phone.releaseDate}</p>
                <h6 class="text-center">Features</h6>
                <ul>
                <li>Display Size:${phone.mainFeatures.displaySize}</li>
                <li>Memory: ${phone.mainFeatures.memory}</li>
                <li>Storage: ${phone.mainFeatures.storage}</li>
                <li>Sensors: ${phone.mainFeatures.sensors}</li>
                </ul>
            </div>
    
    `;
    phoneDetails.appendChild(div);
}