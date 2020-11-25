import './styles.css';
import cardTeplate from "./templates/card-template.hbs"
import ApiService from "./apiService"


const searchForn = document.getElementById('search-form')
const loadMoreBtnRef = document.getElementById('load-btn')
const galleryRef = document.querySelector(".gallery")


searchForn.addEventListener('submit', imageSearh)
loadMoreBtnRef.addEventListener('click', nextPage)


const apiService = new ApiService()

function imageSearh(evt) {
    evt.preventDefault();

    apiService.query = evt.currentTarget.elements.query.value;
    
    apiService.resetPage()
    apiService.fetchArticles().then(appendHitsMarkup)
}

function nextPage() {
    apiService.fetchArticles().then(appendHitsMarkup)
}

function appendHitsMarkup(hits) {
    galleryRef.insertAdjacentHTML("beforeend", cardTeplate(hits))
    loadMoreBtnRef.classList.add("is-visible")
}

