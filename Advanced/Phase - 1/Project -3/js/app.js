console.log('Project -3 | JavaScript');
//e55bc931c41a4655934e25f7c5cbd40c

console.log("This is my index js file");

// Initialize the news api parameters
let apiKey = 'e55bc931c41a4655934e25f7c5cbd40c'

// Grab the news container
let newsAccordion = document.getElementById('newsListing');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `http://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function() {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index+1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsListing">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsListing.innerHTML = newsHtml;
    } else {
        console.log("Some error occured")
    }
}

xhr.send()