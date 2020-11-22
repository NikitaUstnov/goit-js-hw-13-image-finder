import './styles.css';
import cardTeplate from "./templates/card-template.hbs"
import API from "./apiService"

let currentPage = null

const inputRef = document.querySelector("input")
const loadMoreBtnRef = document.getElementById('load-btn')
const 

loadMoreBtnRef.addEventListener('click', nextPage)
inputRef.addEventListener('input', imageSearh)

function imageSearh(evt) {
    evt.preventDefault()

}

function nextPage(e) {
    e.currentPage += 1 ;
}

console.log(currentPage)