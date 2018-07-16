define(['ojs/ojcore', 'services/book', 'ojs/ojmodel'], function(oj, BookModel){
  let BookCollection = oj.Collection.extend({
    url: 'http://localhost:5000/api/book',
    model: BookModel,
    customURL: function(operation, collection, options) {
      if(!isNaN(options.fetchSize) && !isNaN(options.startIndex)) {
        return `http://localhost:5000/api/book?$limit=${options.fetchSize}&$skip=${options.startIndex}`;
      }

      return 'http://localhost:5000/api/book';
    },
    customPagingOptions: function(response) {
      if(!response || !response.data) {
        return response;
      }

      return {
        totalResults: response.total,
        limit: response.limit,
        count: response.data.length,
        offset: response.skip,
        hasMore: (response.skip + response.data.length) < response.total
      };
    }
  });
  
  return BookCollection;
});