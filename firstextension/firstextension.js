(function(ext) {
  ext._shutdown = function() {};
  
  ext._getStatus = function() {
    return {status: 2, msg: 'Ready'};
  };
  
  ext.first_block = function() {
    alert("Hello, world!");
  };
  
  ext.random = function() {
    return Math.random();
  };
  
  var descriptor = {
    blocks: [
      [' ', 'first block', 'first_block'],
      ['r', 'random 0-1', 'random']
    ]
  };
  
  ScratchExtensions.register('First Extension', descriptor, ext)
})({});
