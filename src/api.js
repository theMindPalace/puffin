import axios from 'axios'

export default {
    books: {
        search: (text) => axios.get('https://www.googleapis.com/books/v1/volumes',{
            params:{
                q: text
            }
        })
    }
    
}