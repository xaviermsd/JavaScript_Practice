console.log('Ajax with JavaScript')

let fetchBtn = document.getElementById('fetchBtn')
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
    //console.log("its working");

    //1. Xhr Object
    const xhr = new XMLHttpRequest()

    //2. Open the Object
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true)
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true)
    xhr.getResponseHeader('Content-type', 'application/json')
        //3. What to do on progress? (Optional)
    xhr.onprogress = function() {
        console.log('On Progress')
    }

    //onReadyStateChange ( Optional )
    xhr.onreadystatechange = function() {
        console.log('On ready is: ' + xhr.readyState)
    }

    //4. What to do when  response is ready
    xhr.onload = function() {
        if (this.status == 200) {
            console.log(this.responseText)
        } else {
            console.log('something is wrong')
        }
    }

    //5. Send the request
    params = `{"name": "test", "salary": "123", "age": "23"}`
    xhr.send(params)
}

let populateBtn = document.getElementById('populateBtn')
populateBtn.addEventListener('click', populateBtnClickHandler)

function populateBtnClickHandler() {
    //1. Xhr Object
    const xhr = new XMLHttpRequest()

    //2. Open the Object // http://dummy.restapiexample.com/api/v1/employees
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true)

    //Post
    // xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true)
    // xhr.getResponseHeader('Content-type', 'application/json')

    //3. What to do when  response is ready
    xhr.onload = function() {
            if (this.status == 200) {
                let obj = JSON.parse(this.responseText).data
                console.log(obj)
                let populateTxt = document.getElementById('tBody')
                str = ''
                for (const key in obj) {
                    // str += `<li>${obj[key].employee_name}</li>`
                    str += `<tr>
                    <td>${obj[key].id}</td>
                    <td>${obj[key].employee_name}</td>
                    <td>${obj[key].employee_salary}</td>
                    <td>${obj[key].employee_age}</td>
                </tr>`
                    console.log(str)
                }
                populateTxt.innerHTML = str
            } else {
                console.log('something is wrong')
            }
        }
        //4. Send the request
    xhr.send()
    console.log('We are done')
}