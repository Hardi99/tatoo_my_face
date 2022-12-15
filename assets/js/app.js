import JawgJSLoader from "@jawg/js-loader";
import Map from './modules/map'

Map.init()

let loader = new JawgJSLoader({ accessToken: 'I4dghF3lBbpU1B2DICNfVI6aXEIpvEW56Jxsvuirn8WKKlnJBdafKnLcXQHbSWfC' })

loader.loadJawgPlaces().then((JawgPlaces) => {
  new JawgPlaces.Input({ 
    input: '#property_address',
    searchOnTyping: true, });
});

let inputAddress = document.querySelector('#property_address')
if (inputAddress !== null) {
  let place = JawgPlaces({
    container: document.querySelector('#property_address')
  })
  place.on('change', e => {
    document.querySelector('#property_city').value = e.suggestion.city
    document.querySelector('#property_postal_code').value = e.suggestion.postcode
    document.querySelector('#property_lat').value = e.suggestion.latlng.lat
    document.querySelector('#property_lng').value = e.suggestion.latlng.lng
  })
}

let searchAddress = document.querySelector('#search_address')
if (searchAddress !== null) {
  let place = JawgPlaces({
    container: searchAddress
  })
  place.on('change', e => {
    document.querySelector('#lat').value = e.suggestion.latlng.lat
    document.querySelector('#lng').value = e.suggestion.latlng.lng
  })
}

let $ = require('jquery')
require('../css/app.css');
require('select2')

$('[data-slider]').slick({
  dots: true,
  arrows: true
})
$('select').select2()
let $contactButton = $('#contactButton')
$contactButton.click(e => {
  e.preventDefault();
  $('#contactForm').slideDown();
  $contactButton.slideUp();
})

// Suppression des éléments
document.querySelectorAll('[data-delete]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault()
    fetch(a.getAttribute('href'), {
      method: 'DELETE',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'_token': a.dataset.token})
    }).then(response => response.json())
      .then(data => {
        if (data.success) {
          a.parentNode.parentNode.removeChild(a.parentNode)
        } else {
          alert(data.error)
        }
      })
      .catch(e => alert(e))
  })
})


// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// var $ = require('jquery');

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');
