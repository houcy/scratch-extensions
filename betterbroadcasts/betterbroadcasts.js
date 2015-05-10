console.log('Better Broadcasts by liam4');
console.log('https://scratch.mit.edu/users/liam48D');
console.log('https://github.com/liam4');

betterBroadcasts = {
  broadcastsNow: [
    // Broadcasts that are currently active will
    // be put in here. Each broadcast is an object
    // following this schema:
    //  {
    //    name: "NAME",
    //    args: [
    //      "ARG"..
    //    ]
    //  }
  ]
};

(function(ext) {
  ext._shutdown = function() {};
  ext._status = function() {
    return {status: 2, msg: 'Ready'};
  };
  
  ext.broadcastGo = function(bcname) {betterBroadcasats.broadcastNow[bcname] = true};
  ext.broadcastHat = function(bcname) {return betterBroadcasts.broadcastNow[bcname] === true};
  
  var descriptor = {
    blocks: [
      // Type, spec, function (in quotes), default values.
      ['h', 'when I receive bbc %s', 'better broadcast 1'],
      [' ', 'better broadcast %s', 'better broadcast 1']
    ]
  };
  
  console.log('Unregistering Better Broadcasts');
  ScratchExtensions.unregister('Better Broadcasts');
  console.log('Registering Better Broadcasts');
  ScratchExtensions.register('Better Broadcasts', descriptor, ext);
  console.log('Registered Better Broadcasts');
})({});
