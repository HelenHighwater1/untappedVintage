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
        data: { beer }
        // contentType: false, 
        // processData: false

    })
);
export const updateBeer = beer => {
    return (
    $.ajax({
        method: 'PATCH',
        url: `api/beers/${beer.id}`,
        data: { beer },

    }))
};

export const createReview = review => (
    $.ajax({
        method: 'POST',
        url: 'api/reviews',
        data: { review }
    })
);

export const deleteBeer = id => (
    $.ajax({
        url: `/api/beers/${id}/`,
        method: 'DELETE'
    })
)