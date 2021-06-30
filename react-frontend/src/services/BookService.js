import axios from 'axios';

const BOOK_API_BASE_URL = "http://localhost:8080/api/books";

class BookService{

  //call all books REST api
  getBooks(){
    return axios.get(BOOK_API_BASE_URL);
  }
  //REST api to add book
   createBook(book){
     return axios.post(BOOK_API_BASE_URL,book);
   }

   getBookById(bookId){
     return axios.get(BOOK_API_BASE_URL + '/' + bookId);
   }

   //update book rest api (localhost:8080/api/book/1)
   updateBook(book, bookId){
     return axios.put(BOOK_API_BASE_URL +'/' + bookId, book);
   }
   //delete book rest api
   deleteBook(bookId){
     return axios.delete(BOOK_API_BASE_URL + '/' + bookId);
   }

}

export default new BookService()