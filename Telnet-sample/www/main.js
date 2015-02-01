/**
 * Shows and hides the help panel
 */
function toggleHelp() {
  document.querySelector('.help').classList.toggle('hidden');
  document.body.classList.toggle('dim');
}

(function() {

  // Create and init the terminal
  var term = new Terminal('container');
  term.initFS(false, 1024 * 1024);

  // Capture key presses
  document.body.addEventListener('keydown', function(e) {
    if (e.keyCode == 27) { // Esc
      toggleHelp();
      e.stopPropagation();
      e.preventDefault();
    }
  }, false);

  term.output('Press Esc for options.<br/>');

  // Make an ANSI Color converter.
  var ansiConv = new AnsiConverter();

  // Connect to aardmud by default.
  var host = '192.168.0.131';
  var port = 5001;
  connect(host, port);

  /**
   * Connects to a host and port
   *
   * @param {String} host The remote host to connect to
   * @param {Number} port The port to connect to at the remote host
   */
  function connect(host, port) {
    tcpClient = new TcpClient(host, port);
    tcpClient.connect(function() {
      term.output('Connected to ' + host + ':' + port + '<br/>');
      tcpClient.addResponseListener(function(data) {
        // Run response through ANSI colorizer.
        //var formattedData = ansiConv.formatAnsi(data);
        // Split into multiple lines.
        var lines = formattedData.split('\n');
        // Render response in the terminal.
        var output = lines.join('<br/>');
        term.output(output);
      });
    });
  }

})();

