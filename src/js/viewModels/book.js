define(['ojs/ojcore', 'knockout', 'jquery',
  'services/book',
  'services/books',
  'jet-composites/sweet-alert/loader',
  'jet-composites/my-alert/loader',
  'jet-composites/my-alert-attributes/loader',
  'promise', 'ojs/ojlistview', 'ojs/ojcollectiontabledatasource', 'ojs/ojmodel'],
 function(oj, ko, $, Book, Books) {
  
    function BooksViewModel() {
      var self = this;

      self.message = 'An error occured';

      self.onSuccess = function(message) {
        console.log(message);
        console.log('Callback called received from component');
      };

      self.alertClicked = function(viewmodel, event) {
        console.log(event);
        console.log('Alert Clicked');
      }

      this.fruits = ['Apple', 'Mango'];

      this.books = new Books();
      this.books
        .fetch({
          startIndex: 0,
          fetchSize: 5
        })
        .then((data) => {
          console.log(self.books.toJSON());
          console.log(self.books.length);
        })
        .catch((error) => console.log(error));

      this.dataSource = ko.observable();
      this.dataSource(new oj.CollectionTableDataSource(this.books));

      self.connected = function() {
      };

      self.disconnected = function() {
      };

      self.transitionCompleted = function() {
      };
    }

    return new BooksViewModel();
  }
);
