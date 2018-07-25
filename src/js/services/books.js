define(['ojs/ojcore', 'services/book', './base-collection'], function(oj, BookModel, BaseCollection){
  let BookCollection = BaseCollection.extend({
    url: 'http://localhost:5000/api/book',
    model: BookModel,
    customURL: function(operation, collection, options) {
      if(!isNaN(options.fetchSize) && !isNaN(options.startIndex)) {
        return `http://localhost:5000/api/book?$limit=${options.fetchSize}&$skip=${options.startIndex}`;
      }

      return 'http://localhost:5000/api/book';
    }
  });
  
  return BookCollection;
});