
//................Data receieve from API...........

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
    searchResult.textContent = '';
    //................ No result found error message ............
    if (data.length == 0) {
        const resultNot = document.getElementById('noResult');
        resultNot.style.display = 'block';
        const moreResult = document.getElementById('moreResult');
        moreResult.style.display = 'none';
        const phoneDetails = document.getElementById('phone-details');
        phoneDetails.textContent = '';
    }
    else {
        // ...................No result found error.............
        if (data.length <= 20) {
            const resultNot = document.getElementById('noResult');
            resultNot.style.display = 'none';
            moreResult.style.display = 'none';
            const phoneDetails = document.getElementById('phone-details');
            phoneDetails.textContent = '';
            // ................Every result appending on website..............
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
                    <button onclick="loadPhoneDetail('${phone.slug}')" type="button" class="btn btn-danger ">Details...</button>
                    </div>
                </div>
            </div>
            
            `;
                searchResult.appendChild(div);

            })
        }
        // ..................More than 20 result can't showing............
        else {
            const moreResult = document.getElementById('moreResult');
            moreResult.style.display = 'block';
            const resultNot = document.getElementById('noResult');
            resultNot.style.display = 'none';
            const phoneDetails = document.getElementById('phone-details');
            phoneDetails.textContent = '';

        }

    }

}

// .....................Phone detail data load from API...................
const loadPhoneDetail = phoneId => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => disPlayPhoneDetail(data.data));
}

// ......................Phone details part.................
const disPlayPhoneDetail = phone => {
    console.log(phone);
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    let relsd = `${phone.releaseDate}`;
    if (relsd == '') {
        div.innerHTML = `
    <img class="w-50 mx-auto my-4" src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Brand: ${phone.brand}</h5>
                <p class="card-text">Realease Date: Not Released! </p>
                <h6 class="text-center">Features</h6>
                <ul>
                <li>Display Size:${phone.mainFeatures.displaySize}</li>
                <li>Memory: ${phone.mainFeatures.memory}</li>
                <li>Storage: ${phone.mainFeatures.storage}</li>
                <li>Sensors:
                <ul>
                <li>${phone.mainFeatures.sensors[0]}</li>
                <li>${phone.mainFeatures.sensors[1]}</li>
                <li>${phone.mainFeatures.sensors[2]}</li>
                <li>${phone.mainFeatures.sensors[3]}</li>
                </ul>
                </ul>
                <h6 class="text-center">Others</h6>
                <ul>
                <li>Bluetooth: ${phone.others.Bluetooth}</li>
                <li>GPS: ${phone.others.GPS}</li>
                <li>NFC: ${phone.others.NFC}</li>
                <li>Radio: ${phone.others.Radio}</li>
                <li>USB: ${phone.others.USB}</li>
                <li>WLAN: ${phone.others.WLAN}</li>
                </ul>

            </div>
    
    `;
        phoneDetails.appendChild(div);
    }
    else {
        div.innerHTML = `
    <img class="w-50 mx-auto my-4" src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Brand: ${phone.brand}</h5>
                <p class="card-text">Realease Date: ${phone.releaseDate} </p>
                <h6 class="text-center">Features</h6>
                <ul>
                <li>Display Size:${phone.mainFeatures.displaySize}</li>
                <li>Memory: ${phone.mainFeatures.memory}</li>
                <li>Storage: ${phone.mainFeatures.storage}</li>
                <li>Sensors:
                <ul>
                <li>${phone.mainFeatures.sensors[0]}</li>
                <li>${phone.mainFeatures.sensors[1]}</li>
                <li>${phone.mainFeatures.sensors[2]}</li>
                <li>${phone.mainFeatures.sensors[3]}</li>
                </ul>
                </ul>
                <h6 class="text-center">Others</h6>
                <ul>
                <li>Bluetooth: ${phone.others.Bluetooth}</li>
                <li>GPS: ${phone.others.GPS}</li>
                <li>NFC: ${phone.others.NFC}</li>
                <li>Radio: ${phone.others.Radio}</li>
                <li>USB: ${phone.others.USB}</li>
                <li>WLAN: ${phone.others.WLAN}</li>
                </ul>

            </div>
    
    `;
        phoneDetails.appendChild(div);
    }

}