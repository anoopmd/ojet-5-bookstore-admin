define(['ojs/ojcore', 'knockout', 'jquery',
  'services/book',
  'services/books',
  'ojs/ojnavigationlist', 'ojs/ojrouter', 'ojs/ojmodule',
  'ojs/ojcollectiontabledatasource', 'ojs/ojtable',
  'ojs/ojcollectionpagingdatasource',
  'ojs/ojdialog',
  'ojs/ojpagingtabledatasource', 'ojs/ojpagingcontrol',
  'ojs/ojknockout', 'ojs/ojinputtext', 'ojs/ojcheckboxset', 'ojs/ojformlayout'],
 function(oj, ko, $, Book, Books) {
  
    function AdminBooksViewModel() {
      var self = this;

      this.books = new Books();

      this.books
        .fetch({
          startIndex: 0,
          fetchSize: 5
        })
        .then((data) => console.log(data))
        .catch((error) => console.log(error));

      this.book = {
        title: ko.observable(''),
        author: ko.observable(''),
        price: ko.observable('')
      };
      this.columns = [
        {"headerText": "Title", "field": "title", "sortable": "enabled"},
        {"headerText": "Author", "field": "author", "sortable": "enabled"},
        {"headerText": "Price", "field": "price", "sortable": "enabled"},
        {"headerText": "Actions", "sortable": "disabled"}
      ];

      this.datasource = new oj.CollectionTableDataSource(this.books);
      this.pagingDatasource = ko.observable();
      this.pagingDatasource(new oj.PagingTableDataSource(this.datasource));

      this.addUser = function() {
        var book = new Book({
          title: self.book.title(),
          author: self.book.author(),
          price: self.book.price()
        })
        book
          .save()
          .then(function() {
            self.books.add(book, {deferred: true});
          });
      };

      this.deleteUser = function(data, event){
        self.books.get(data.id, {deferred: true}).then(function(model) {
          model.destroy({wait:true});
        });
      };

      self.connected = function() {
      };

      self.disconnected = function() {
      };

      self.transitionCompleted = function() {
      };
    }
    return AdminBooksViewModel();
  }
);
