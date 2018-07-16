define(['ojs/ojcore'], function(oj){
  function Cache(){
    this.set = function(key, val) {
      window.localStorage.setItem(key, JSON.stringify(val));
    },
    this.get = function(key) {
      let val = window.localStorage.getItem(key);
      if(!val || typeof val === 'string') return val;
      if(typeof val === 'object') return JSON.parse(val);

      return val;
    }
  }

  return new Cache();
});