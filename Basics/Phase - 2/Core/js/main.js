console.log('ok')
let myArray = [1, 2, 3, 4, 5]
myArray.forEach(element => {
  console.log(element)
})
myArray.forEach(ok => {
  console.log(ok)
})
let myObj = {
  firstName: 'ok',
  lastName: 'ok2',
  age: 23,
  emailId: 'harshprajapati34@gmail.com'
}
console.log(myObj)
for (const key in myObj) {
  if (myObj.hasOwnProperty(key)) {
    const element2 = myObj[key]
    console.log(element2)
  }
}
