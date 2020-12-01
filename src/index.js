import './styles.css';
import * as basicLightbox from 'basiclightbox'
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

function appendFullSigeImg(largeImageURL) {
 const content = document.querySelector(".lightbox__content")
  content.insertAdjacentHTML("beforeend", fullSizeImgTpl({ largeImageURL }))
}

function openModal(evt) {
  evt.preventDefault()
  const { nodeName, src } = evt.target
  console.log(nodeName)
  
  if (nodeName === 'IMG') {
    modalEl.classList.add('is-open')
    appendFullSigeImg(src)
  }
}

function closeModal() {
  
  modalEl.classList.remove('is-open')
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

