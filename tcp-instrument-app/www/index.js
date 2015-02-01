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
  //
  //
  //
  //
console.log('zebetiboop1');
$(window).load(function(){
	var pitch = 0;
	var instr = 0;
	$('#select').change(function(){
		$('body div').hide();
		$('#div-'+$(this).val()).show();
		$('#div-'+$(this).val()+' img:first-child').trigger('click');
	})
	$('#drum1').click(function(){
		instr = 0;
	})
	$('#drum2').click(function(){
		instr = 1;
	})
	$('#guitar1').click(function(){
		instr = 2;
	})
	$('#guitar2').click(function(){
		instr = 3;
	})
	$('#guitar3').click(function(){
		instr = 4;
	})
	$('#guitar4').click(function(){
		instr = 5;
	})
	$('#airhorn').click(function(){
		instr = 6;
	})
	$('#A').click(function(){
		pitch = -5;
		tcpClient.sendMessage(instr+','+pitch);
	});
	$('#C').click(function(){
		pitch = -2;
		tcpClient.sendMessage(instr+','+pitch);
	});
	$('#D').click(function(){
		pitch = 0;
		tcpClient.sendMessage(instr+','+pitch);
	});
	$('#F').click(function(){
		pitch = 3;
		tcpClient.sendMessage(instr+','+pitch);
	});
	$('#G').click(function(){
		pitch = 5;
		tcpClient.sendMessage(instr+','+pitch);
	});
	$('#A2').click(function(){
		pitch = 7;
		tcpClient.sendMessage(instr+','+pitch);
	});
	$('#C2').click(function(){
		pitch = 10;
		tcpClient.sendMessage(instr+','+pitch);
	});
	$('#D2').click(function(){
		pitch = 12;
		tcpClient.sendMessage(instr+','+pitch);
	});
	$('#F2').click(function(){
		pitch = 15;
		tcpClient.sendMessage(instr+','+pitch);
	});
	$('#G2').click(function(){
		pitch = 17;
		tcpClient.sendMessage(instr+','+pitch);
	});
	console.log('zebetiboop');
	for (var i = 5000; i < 5006; i++) {
		connect(i);
	}
});

function connect(port){
	var new_tcpClient = new TcpClient('192.168.0.131', port);
	new_tcpClient.connect(function() {
		console.log('connected!');
		tcpClient = new_tcpClient;
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
}