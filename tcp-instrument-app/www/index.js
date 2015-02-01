console.log('zebetiboop1');
(function(){
	console.log('zebetiboop');
	tcpClient = new TcpClient('192.168.0.131', 5001);
	tcpClient.connect(function() {
		console.log('connected!');
		tcpClient.addResponseListener(function(data) {
			// Run response through ANSI colorizer.
			//var formattedData = ansiConv.formatAnsi(data);
			// Split into multiple lines.
			var lines = data.split('\n');
			// Render response in the terminal.
			var output = lines.join('<br/>');
			console.log(output);
			});
		tcpClient.sendMessage('zebetiboop\n');
	});
})();