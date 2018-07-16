define(['ojs/ojcore', 'knockout', 'jquery',
  'ojs/ojnavigationlist', 'ojs/ojrouter', 'ojs/ojmodule'],
 function(oj, ko, $) {
  
    function AdminViewModel() {
      var self = this;

      // Retrieve the router static instance and configure the states
      var router = oj.Router.rootInstance;

      // Create and configure the child router to be used for admin
      var adminRouter = router.createChildRouter('admin')
      adminRouter.configure( {
        'books':  { label: 'Books', value: 'admin/books', isDefault: true },
        'invoices': { label: 'Invoices', value: 'admin/invoices'}
      });

      this.router = adminRouter;

      self.connected = function() {
      };

      self.disconnected = function() {
      };

      self.transitionCompleted = function() {
      };
    }
    return AdminViewModel();
  }
);
