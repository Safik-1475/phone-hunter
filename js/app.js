// search field 

const cellPhones = () => {
    // console.log('Search button is clicked')
    const searchField = document.getElementById('search-field')
    // console.log(searchField)
    const searchText = searchField.value;
    searchField.value = "";
    // console.log(searchText)

    // fetch 
    const url = (`https://openapi.programming-hero.com/api/phones?search=${searchText.toLowerCase()}`)
    fetch(url)
        .then(cellResponse => cellResponse.json())
        .then(cellResponseData => phonesData(cellResponseData.data))

    // erroe handle
    // if (phoneDetails.length < searchText.length) {
    //     console.log(true)
    // } else {
    //     const searchField = document.getElementById('search-field')
    //     const h3 = document.createElement('h3')
    //     h3.innerText = 'No Phone Found';
    //     h3.style.color = "red"
    //     h3.style.textAlign = "center"
    //     searchField.appendChild(h3)
    // }
};

const phonesData = phones => {
    // console.log(phones)
    // get card container
    const cardContainer = document.getElementById('card-container')
    cardContainer.textContent = '';
    phones.forEach(phone => {
        // console.log(phone)
        // create div
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card h-100 p-2 text-center">
            <img src="${phone.image}" class="card-img-top mx-auto d-block img-fluid w-75" alt="image">
            <div class="card-body">
                <h5 class="card-title">${phone.brand}</h5>
                <h5 class="card-title">${phone.phone_name}</h5>     
            </div>
            <button onclick='phoneDetails("${phone.slug}")' class="btn btn-sm w-50 mx-auto btn btn-outline-info text-capitalize">explore</button>
        </div>
        `;
        cardContainer.appendChild(div)
    });
}

// products details 

const phoneDetails = phoneData => {
    const slugUrl = (`https://openapi.programming-hero.com/api/phone/${phoneData}`);
    fetch(slugUrl)
        .then(slugUrlRes => slugUrlRes.json())
        .then(slugUrlResData => phoneDetailsDisplay(slugUrlResData.data))
};

const phoneDetailsDisplay = phone => {
    // console.log(phone)
    const slugContainer = document.getElementById('slug-container');
    slugContainer.textContent = '';
    // console.log(slugContainer)
    // create div
    const div = document.createElement('div');
    div.classList.add('col')
    div.innerHTML = `
        <div class="card h-100 p-2">
            <img src="${phone.image}" class="card-img-top d-block mx-auto img-fluid w-75" alt="image">
            <div class="card-body px-5">
                <h5 class="card-title">${phone.name}</h5>   
                <h5 id="release-date" class="card-title">${phone.releaseDate}</h5>
                <ul class="list-group">
                    <li class="list-group-item border-0 p-0 "><b> Chip Set : </b>${phone.mainFeatures.chipSet}</li>
                    <li class="list-group-item border-0 p-0 "><b> Display Size : </b>${phone.mainFeatures.displaySize}</li>
                    <li class="list-group-item border-0 p-0 "><b> Memory : </b>${phone.mainFeatures.memory}</li>
                </ul>
            </div>
        </div>
    `;
    slugContainer.appendChild(div)

    // errow handle
    const releaseDate = document.getElementById('release-date')
    if (phone.releaseDate == false) {
        releaseDate.innerText = 'Release Date Not Found'
        releaseDate.style.color = "red"
    }


}