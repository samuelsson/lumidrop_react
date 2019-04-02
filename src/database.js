const database = (query) => {
    const url = 'http://localhost:4000/api';

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({ query })
    })
        .then(r => r.json())
};

export default database;
