import React, { Component } from 'react'
import BookService from '../services/BookService'

class UpdateBook extends Component {
  constructor(props){
    super(props)

    this.state = {

      id:this.props.match.params.id,
      title:'',
      author:'',
      genre:'',
      isbn:''
    }

    this.titleChange = this.titleChange.bind(this);
    this.authorChange = this.authorChange.bind(this);
    this.updateBook = this.updateBook.bind(this);
  }

  componentDidMount(){
    BookService.getBookById(this.state.id).then((res) => {
       let book = res.data;

       this.setState({title:book.title,
                      author:book.author,
                      genre:book.genre,
                      isbn:book.isbn

      });
    });
  }

  //functions
   titleChange = (e) =>{
     this.setState({title: e.target.value});
   }
   authorChange = (e) =>{
    this.setState({author: e.target.value});
  }
  genreChange = (e) =>{
    this.setState({genre: e.target.value});
  }
  isbnChange = (e) =>{
    this.setState({isbn: e.target.value});
  }

  //onclick function
  updateBook = (e) =>{
    e.preventDefault();
    //this book object has all updated data
    let book = {title:this.state.title, author: this.state.author, genre: this.state.genre, isbn: this.state.isbn};
    console.log('book => ' +JSON.stringify(book));

    //call rest api to add the book
    BookService.updateBook(book, this.state.id).then((res) =>{
        this.props.history.push('/books');
    });
    
  }
  cancel(){
    this.props.history.push('/books');
  }

  render() {
    return (
      <div>
        
        <div className="container">
           <div className="row">
              <div className="card col-md-6 offset-md-3">
                  <h3 className="text-center">Update Book</h3>
                  <div className="card-body">

                    <form action="">
                        <div className="form-group">
                          <label htmlFor="">Book Title:</label>
                          <input className="form-control" type="text" placeholder="Book Title" name="title" value={this.state.title} onChange={this.titleChange} />
                        </div>
 
                        <div className="form-group">
                          <label htmlFor="">Author:</label>
                          <input className="form-control" type="text" placeholder="Author" name="author" value={this.state.author} onChange={this.authorChange} />
                        </div>

                        <div className="form-group">
                          <label htmlFor="">Genre:</label>
                          <input className="form-control" type="text" placeholder="Genre" name="genre" value={this.state.genre} onChange={this.genreChange} />
                        </div>

                        <div className="form-group">
                          <label htmlFor="">ISBN#:</label>
                          <input className="form-control" type="text" placeholder="isbn#" name="isbn#" value={this.state.isbn} onChange={this.isbnChange} />
                        </div>

                        <button style={{marginTop:"10px"}} className="btn btn-success" onClick={this.updateBook}>Save</button>
                         <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px", marginTop:"10px"}}>Cancel</button>
                    </form>

                  </div>
              </div>
           </div>
        </div>

      </div>
    )
  }
}

export default UpdateBook
