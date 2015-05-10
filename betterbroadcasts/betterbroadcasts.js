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

(function() {
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
    ],
    menus: {
      // Name: [contents...]
    },
    url: "https://liam4.github.io/scratch-extensions/index.php#betterbroadcasts",
  };
  
  ScratchExtensions.register('Better Broadcasts', descriptor, ext);
});
