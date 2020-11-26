import { data } from "autoprefixer"


export default class ApiService{
  constructor() {
    this.searchQuery = ''
    this.page = 1
    this.key = "19188081-211c1aaa4cc6c7e30b8f313cc"
  }
    

  fetchArticles() {
       const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.key}`
 return fetch(url)
    .then(r => r.json())
   .then(data => {
     this.page += 1
     return data.hits
   }
     
   
 )
    
  }
  
  resetPage() {
    this.page = 1
  }
  get query() {
    return this.searchQuery
  }
  
  set query(newQuery) {
    this.searchQuery = newQuery
  }
}