const fetchSara = (url, method, body = {}) => {
    const options = {
        method,
    }

    if (method == 'POST' || method == 'PUT') {
        options.headers = {
            "content-Type": "application/json",
        }
        options.body = JSON.stringify(body);
    }

    return fetch(url, options).then((res) => res.json())
};

const get = (url) => fetchSara(url, 'GET')

const post = (url, body) => fetchSara(url, 'POST', body)

const put = (url, body) => fetchSara(url, 'PUT', body)

const taBort = (url) => fetchSara(url, 'DELETE')

export { get, put, taBort, post };