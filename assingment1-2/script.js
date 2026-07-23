const product= {
  list: function() {
    console.log('list');
  },
  create: function() {
    console.log('create');
    window.add = function(){
      //add logic here

      //use window.add then we can call this function from anywhere in the code
    }

  }
}