// search field 

const cellPhones = () => {
    // console.log('Search button is clicked')
    const searchField = document.getElementById('search-field')
    // console.log(searchField)
    const searchText = searchField.value;
    searchField.value = "";
    // console.log(searchText)

    // fetch 
    const url = (`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    fetch(url)
        .then(cellResponse => cellResponse.json())
        .then(cellResponseData => phonesData(cellResponseData.data))
};

const phonesData = phones => {
    // console.log(phones)
    // get card container
    const cardContainer = document.getElementById('card-container')
    phones.forEach(phone => {
        console.log(phone)
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
            <button class="btn btn-sm w-50 mx-auto btn btn-outline-info text-capitalize">buy now</button>
        </div>
        `;
        cardContainer.appendChild(div)
    });
}

