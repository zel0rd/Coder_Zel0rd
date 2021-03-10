let test = fetch('http://zelord.tk/fetch')
    .then(function(response) {
        return response.json()
    })
    .then(function(myJson){
        console.log(JSON.stringify(myJson))
        console.log(myJson['homeTown'])
        return myJson
    })
    .catch(function() {
        console.log("ERROR")
    })

export { test }