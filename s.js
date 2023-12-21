var showMoreBtn = document.querySelector('#show-more-btn')
var searchResult = document.querySelector('#search-result')
var mainBtn = document.querySelector('#btn')
var srarchForm = document.querySelector('#srarch-form')
var searchBox = document.querySelector('#search')

let keyword = ""
let page =1
let accessKey = 'o8jC9WEc9NPDNpAjfS4Ewd8MwAHwN7uYsXUu6HOZoeQ'

async function searchImage(){
    keyword = searchBox.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=21`

    const response = await fetch(url)
    const data = await response.json()
    
    if (page ===1){
        searchResult.innerHTML = ''
    }
    
    const results = data.results
    results.map((result) =>{
        const image = document.createElement("img")
        image.src = result.urls.small
        const imageLink = document.createElement('a')
        imageLink.href = result.links.html
        imageLink.target = "_blank"

        imageLink.appendChild(image)

        searchResult.appendChild(imageLink)
    })

    showMoreBtn.style.display = "block"
}


srarchForm.addEventListener('submit',function(e){
    e.preventDefault()
    page=1
    searchImage()
})

showMoreBtn.addEventListener('click',function(){
    page++
    searchImage()
})
// o8jC9WEc9NPDNpAjfS4Ewd8MwAHwN7uYsXUu6HOZoeQ
// curl https://api.unsplash.com/search/photos?query=minimal █