export const fetchBeers = () => (
    $.ajax({
        url: 'api/beers',
    })
);

export const fetchBeer = (id) => (
    $.ajax({
        url: `api/beers/${id}`
    })
);

export const createBeer = beerForm => (
    $.ajax({
        method: 'POST',
        url: 'api/beers',
        data: { beerForm },

    })
);

export const createReview = review => (
    $.ajax({
        method: 'POST',
        url: 'api/reviews',
        data: { review }
    })
);
