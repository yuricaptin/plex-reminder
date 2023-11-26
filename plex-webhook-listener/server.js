 const express = require('express');
 const app = express();
 
 app.use(express.json());
 
 app.post('/webhook', (req, res) => {
	console.log('A webhook has been recieved: ', req.body);
	
	
	res.status(200).send('Webhook recieved');
	
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log('Server is listening on port', PORT);
});