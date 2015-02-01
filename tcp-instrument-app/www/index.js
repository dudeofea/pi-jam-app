  //                             _
  //                           .' `'.__
  //                          /      \ `'"-,
  //         .-''''--...__..-/ .     |      \
  //       .'               ; :'     '.  a   |
  //      /                 | :.       \     =\
  //     ;                   \':.      /  ,-.__;.-;`
  //    /|     .              '--._   /-.7`._..-;`
  //   ; |       '                |`-'      \  =|
  //   |/\        .   -' /     /  ;         |  =/
  //   (( ;.       ,_  .:|     | /     /\   | =|
  //     /  '/\    /       )    |/     `-...-`
  //    /    | |  `\    /-'    /;
  //    \  ,,/ |    \   D    .'  \
  // jgs `""`   \  nnh  D_.-'L__nnh
  //
  //
  //
  //
  //
  //
  //
  //
  //
console.log('zebetiboop1');
$(window).load(function(){
	var pitch = 0;
	$('#drum1').click(function(){
		//play sample
		tcpClient.sendMessage('0,'+pitch);
	})
	$('#drum2').click(function(){
		//play sample
		tcpClient.sendMessage('1,'+pitch);
	})
	$('#guitar1').click(function(){
		//play sample
		tcpClient.sendMessage('2,'+pitch);
	})
	$('#guitar2').click(function(){
		//play sample
		tcpClient.sendMessage('3,'+pitch);
	})
	$('#guitar3').click(function(){
		//play sample
		tcpClient.sendMessage('4,'+pitch);
	})
	$('#guitar4').click(function(){
		//play sample
		tcpClient.sendMessage('5,'+pitch);
	})
	$('#A').click(function(){
		pitch = -5;
	});
	$('#C').click(function(){
		pitch = -2;
	});
	$('#D').click(function(){
		pitch = 0;
	});
	$('#F').click(function(){
		pitch = 3;
	});
	$('#G').click(function(){
		pitch = 5;
	});
	console.log('zebetiboop');
	tcpClient = new TcpClient('192.168.42.1', 5001);
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
	});
});