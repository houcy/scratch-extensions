(function() {
  // Template JS file for making your own extensions.
  // Make sure you copy crossorigin.xml as well,
  // otherwise it won't work!
  
  ext._status = function() {
    // Return the status. Chances are it'll follow something
    // like the following code:
    return {status: 2, msg: 'Ready'};
  };
  
  ext.console_log = function(mode, text) {
    // Demo block.
    console[mode](text);
  };
  
  var descriptor = {
    blocks: [
      // Type, spec, function (in quotes), default values.
      [' ', '%m.consoleFunctions to console %s', 'console_log', 'Hello, world!']
    ],
    menus: {
      // Name: [contents...]
      consoleFunctions: ['log', 'info', 'warn', 'error']
    }
    // Uncomment and put in a help file URL here optionally.
    //url: "",
  };
  
  // Register the extension.
  // Replace 'Extension Name' with the name of your extension.
  ScratchExtensions.register('Extension Name', descriptor, ext);
});
