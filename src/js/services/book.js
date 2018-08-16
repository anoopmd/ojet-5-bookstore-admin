define(['ojs/ojcore', 'ojs/ojmodel'], function(oj){
  BookModel =  oj.Model.extend({
    urlRoot: 'http://localhost:5000/api/book',
    idAttribute:'id',
    parse: function(book) {
      return {
        id: book.id,
        title: book.title,
        author: book.author,
        price: book.price
      };
    },
  });

  window.BookModel = BookModel;
  
  return BookModel;
});