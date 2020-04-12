// console.log('This is Notes add Project and working in app.js')
showNotes()
//If user adds a note, add it to a localstorage
let addBtn = document.getElementById('addNote')
addBtn.addEventListener('click', function (_e) {
  let addDetails = document.getElementById('addDetails')
  let addTitle = document.getElementById('addTitle')
  let notes = localStorage.getItem('notes')
  if (notes == null) {
    noteObj = []
  } else {
    noteObj = JSON.parse(notes)
  }
  let myObj={
    title:addTitle.value,
    details:addDetails.value
  };
  noteObj.push(myObj)
  //   noteObj.push(addTitle.value)
  localStorage.setItem('notes', JSON.stringify(noteObj))
  addDetails.value = ''
  addTitle.value = ''
  //   console.log(noteObj)
  showNotes()
})
//Function to Show the Note
function showNotes () {
  let notes = localStorage.getItem('notes')
  if (notes == null) {
    noteObj = []
  } else {
    noteObj = JSON.parse(notes)
  }
  let html = ''
  noteObj.forEach(function (element, index) {
    html += `<div class="noteCard card mx-2 my-2" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">Note Title ${":"+element.title}</h5>
                            <p class="card-text">${element.details}</p>
                            <button id="${index}" onclick= "deletNotes(this.id)" class="btn btn-primary">Delete</a>
                        </div>
                    </div>`
  })
  let notesElm = document.getElementById('notesDisplay')
  if (noteObj.length != 0) {
    notesElm.innerHTML = html
  } else {
    notesElm.innerHTML = `Noting to show here - Please add note above`
  }
}

//Function to Delete the Note
function deletNotes (index) {
  //   console.log('Im Deleting This Note :' + index)

  let notes = localStorage.getItem('notes')
  if (notes == null) {
    noteObj = []
  } else {
    noteObj = JSON.parse(notes)
  }
  noteObj.splice(index, 1)
  localStorage.setItem('notes', JSON.stringify(noteObj))
  showNotes()
}

//Search Filter
let search = document.getElementById('searchText')
search.addEventListener('input', function () {
  let inputVal = search.value.toLowerCase()
  //   console.log('input event fired!' + inputVal)
  let noteCards = document.getElementsByClassName('noteCard')
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName('p')[0].innerText
    if (cardTxt.includes(inputVal)) {
      element.style.display = 'block'
    } else {
      element.style.display = 'none'
    }
  })
})
