import './styles.css';
// import * as basicLightbox from 'basiclightbox'
import cardTeplate from "./templates/card-template.hbs"
import ApiService from "./apiService"
import fullSizeImgTpl from "./templates/fullscreen-img.hbs"

const searchForn = document.getElementById('search-form')
const loadMoreBtnRef = document.getElementById('load-btn')
const galleryRef = document.querySelector(".gallery")
const modalEl = document.querySelector(".js-lightbox")
const closeModalBtn = document.querySelector(".lightbox__button")

searchForn.addEventListener('submit', imageSearh)
loadMoreBtnRef.addEventListener('click', nextPage)
galleryRef.addEventListener("click", openModal)
closeModalBtn.addEventListener("click", closeModal)

const apiService = new ApiService()

function imageSearh(evt) {
    evt.preventDefault();

    apiService.query = evt.currentTarget.elements.query.value;
    
    apiService.resetPage()
    apiService.fetchArticles().then(appendHitsMarkup)
    
}

function nextPage() {
    apiService.fetchArticles().then(appendHitsMarkup)
    onScrollTo()
}

function appendHitsMarkup(hits) {
    galleryRef.insertAdjacentHTML("beforeend", cardTeplate(hits))
    loadMoreBtnRef.classList.add("is-visible")
}

function appendFullSigeImg(hits) {
    modalEl.insertAdjacentHTML("beforeend", fullSizeImgTpl(hits))
}

function openModal(evt) {
  evt.preventDefault()

  modalEl.classList.add('is-open')

  if (modalEl.classList.contains("is-open")) {
        apiService.fetchArticles().then(appendFullSigeImg)
  }
    

}

function closeModal() {
  modalEl.classList.remove('is-open')
  
//   fullSizeImgEl.src = '';
//       fullSizeImgEl.alt = '';
}
function onScrollTo() {
    let value = document.body.scrollHeight;
     setTimeout(() => {
      window.scrollTo({
        top: value,
        left: 0,
        behavior: 'smooth',
      });
    }, 1000);
}