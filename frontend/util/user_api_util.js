export const fetchUsers = () => (
    $.ajax({
        url: 'api/users',
    })
);

export const fetchUser = (id) => (
    $.ajax({
        url: `api/users/${id}`
    })
);