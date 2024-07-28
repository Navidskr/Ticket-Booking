let countrySelectBox = document.querySelector('.countrySelect')
let citySelect = document.querySelector('.citySelect')

let countriesData = {
    Iran : ['Tabriz','Tehran','Shiraz','Isfahan','Mashhad'],
    Turkey :['Istanbul','Izmir','Ankara','Antalia'],
    USA : ['NewYork','LosAngles','SanDiego','Texas']
}
countrySelectBox.addEventListener('change', function(){
    let mainCountryName = countrySelectBox.value
    let mainCountryCities = countriesData[mainCountryName]

    mainCountryCities.forEach(function(city){
        // console.log(city)
        citySelect.innerHTML += '<option>' + city + '</option>'

    })
})