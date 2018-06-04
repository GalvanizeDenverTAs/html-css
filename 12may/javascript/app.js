const base_url = 'https://icanhazdadjoke.com/'
const options = {
    method: 'GET',
    headers: new Headers({
        'Accept': 'application/json'
    })
}

const jokeAgain = () => fetch(base_url, options)
    .then(resp => resp.json())
    .then(data => console.log(data))

jokeAgain()