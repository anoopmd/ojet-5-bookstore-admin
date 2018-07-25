define(['ojs/ojcore', 'services/book', 'ojs/ojmodel'], function(oj, BookModel){
  let BaseCollection = oj.Collection.extend({
    paginatedRequestUrl: function(options) {
      return `${this.url}?$limit=${options.fetchSize}&$skip=${options.startIndex}`;
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
  
  return BaseCollection;
});