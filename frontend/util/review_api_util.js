export const fetchReviews = () => (
    $.ajax({
        url: 'api/reviews',
    })
);
export const fetchBeerReviews = (beerId) => (
    $.ajax({
        url: 'api/reviews',
        data: { beerId }
    })
);
export const fetchUserReviews = (userId) => {
    console.log('in api')
    return (
         $.ajax({
        url: 'api/reviews',
        data: { user_id : userId }
    })
    )
   
};

export const fetchVintages = () => (
    $.ajax({
        url: 'api/vintages',
    })
);

export const fetchReview = (id) => (
    $.ajax({
        url: `api/reviews/${id}`
    })
);

export const createReview = review => (
    $.ajax({
        method: 'POST',
        url: 'api/reviews',
        data: { review }


    })
);
export const updateReview = review => {
    return (
        $.ajax({
            method: 'PATCH',
            url: `api/reviews/${review.id}`,
            data: { review },

        }))
};


export const deleteReview = id => (
    $.ajax({
        url: `/api/reviews/${id}/`,
        method: 'DELETE'
    })
)