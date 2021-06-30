import React, { Component } from 'react'
import BookService from '../services/BookService'

class ListOfBooks extends Component {
   constructor(props){
      super(props)

      this.state = {
         books:[]
      }
     this.addBook = this.addBook.bind(this);
     this.editBook = this.editBook.bind(this);
     this.deleteBook = this.deleteBook.bind(this);
   } 

   //methods to call addBook or update book page or delete book info(routes)
  addBook(){
     this.props.history.push('/add-book');
  }
  editBook(id){   
      this.props.history.push(`/update-book/${id}`);
  }
  deleteBook(id){
      BookService.deleteBook(id).then((res) => {
           this.setState({books: this.state.books.filter(book => book.id !==id)});
      });
  }

     componentDidMount(){
       BookService.getBooks().then((res) =>{
          this.setState({ books: res.data});
       });
     }

  render() {
    return (
      <div>
         <h2 className="text-center">Book List</h2>

         <div className ="row">
           
           <table className="table table-bordered border shadow">
               <thead className="thead-dark">
                 <tr>
                   <th>Book Title</th>
                   <th>Author</th>
                   <th>Genre</th>
                   <th>ISBN#</th>
                 </tr>
               </thead>

               <tbody>
                 {
                   this.state.books.map(
                     book => 
                     <tr key = {book.id}>
                       <td>{book.title}</td>
                       <td>{book.author}</td>
                       <td>{book.genre}</td>
                       <td>{book.isbn}</td>

                        <td>
                          <button style={{marginLeft:"40px"}} className="btn btn-info" onClick = {() => this.editBook(book.id)}>Edit</button>
                          <button style={{marginLeft:"20px"}} className="btn btn-warning" onClick = {() => this.deleteBook(book.id)}>Delete</button>
                        </td>
                     </tr>
                   )
                 }
               </tbody>

           </table>
     {/* add button */}
           <button style ={{width:'170px' , textAlign:'center'}} className="btn btn-primary" onClick={this.addBook}>Add Book</button>
         </div>
      </div>
    )
  }
}

export default ListOfBooks
