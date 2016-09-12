chrome.tabs.query( {'active':true},
	
	function(tabs){

		chrome.tabs.sendMessage(tabs[0].id,'MyMessage',function(response){

			document.getElementById('ContentArea').innerHTML=response;
		});
	});