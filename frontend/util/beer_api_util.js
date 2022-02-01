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

export const createBeer = beer => (
    $.ajax({
        method: 'POST',
        url: 'api/beers',
        data: { beer },

    })
);

export const createReview = review => (
    $.ajax({
        method: 'POST',
        url: 'api/reviews',
        data: { review }
    })
);
