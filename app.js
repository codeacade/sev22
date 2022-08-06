const http = require('http');
const server = http.createServer((req, res) => {
	var htmlString = "";

	Object.entries(req).forEach(([key, value]) => {
		// htmlString += "Key " + keyNo + ": " + key + "<br>";
		htmlString += `		<b>Key: ${ key }, Value Type: ${ typeof value},
</b>`;
		if(typeof value == "object" && value != undefined){
			Object.entries(value).forEach(([vkey, vvalue]) => {
				htmlString += `		VKey: ${ vkey }, VValue VType: ${ typeof vvalue},
`;
				htmlString += "<br>";
			});
		}
		else {
			htmlString += `<b>Value: ${ value}
</b>`;
		}
		htmlString += "<br>";
    });
	res.end(`<html>
	<h3>Request keys:</h3>
	<p style="font-family: sans-serif;">
	${ htmlString }
</p>
</html>`);
	
});
server.listen(3000);