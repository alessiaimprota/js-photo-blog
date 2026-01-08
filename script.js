const endpoint= "https://lanciweb.github.io/demo/api/pictures/"
console.log(endpoint)

axios.get(endpoint)
    .then(response => {
        console.log(response.data)
    })