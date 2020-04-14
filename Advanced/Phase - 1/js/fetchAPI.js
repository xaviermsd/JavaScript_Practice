console.log('This is Fetch API Practice')

//Button with ID
let myBtn = document.getElementById('myBtn')

//div with id content
let content = document.getElementById('content')

// function getData() {
//     console.log("Started get data");
//     url = 'files/demo.txt'
//     fetch(url)
//         .then(response => {
//             console.log("Inside First Then");
//             return response.text()
//         })
//         .then(data => {
//             console.log("Inside Secound Then");
//             console.log(data)
//         })
// }

// function getData() {
//     console.log("Started get data");
//     url = 'https://api.github.com/users'
//     fetch(url)
//         .then(response => {
//             console.log("Inside First Then");
//             return response.json()
//         })
//         .then(data => {
//             console.log("Inside Secound Then");
//             console.log(data)
//         })
// }
//getData();

function postData() {
    url = 'http://dummy.restapiexample.com/api/v1/create'
    data = '{"name":"test","salary":"123","age":"23"}'
    params = {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        }
        // fetch(url, params)
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then((data) => {
        //         console.log(data);
        //     })
    fetch(url, params)
        .then(response => response.json())
        .then(data => console.log(data))
}
console.log('Before Get Data')
postData()
console.log('After Get Data')