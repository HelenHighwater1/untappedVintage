export const fetchBreweries = () => (
    $.ajax({
        url: 'api/breweries',
    })
);
