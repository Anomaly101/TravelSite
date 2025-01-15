const LocationCardTemplate = document.querySelector("[data-location-template]")

fetch(travel_recommendation_api.json)
    .then(res => res.json())
    .then(data => {
        data.forEach(location)
        const location = locationCardTemplate.content.cloneNode(true).children[0]
        console.log(location)
    })
