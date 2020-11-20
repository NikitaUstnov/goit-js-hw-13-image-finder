const BASE_URL = "https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ"
const DevKey = "19188081-211c1aaa4cc6c7e30b8f313cc"

function fechPhotosCard(params) {
    return fetch('${BASE_URL}')
}