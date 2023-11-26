 const express = require('express');
 const app = express();
 
 app.use(express.json());
 
 app.post('/webhook', (req, res) => {
	console.log('A webhook has been recieved: ', req.body);
	const eventData = req.body;
		//Null Check, also to make sure the information is actually in there
		if (eventData.event == 'library.new' && eventData.Metadata){
	//Checking what is being added then will notify the user
	//This is for when a new anime episode is being added, this also works for anything show related besides anime
			if(eventData.Metadata.librarySectionTitle == 'Anime'){
				if(eventData.Metadata && eventData.Metadata.type == 'episode'){
					const title = eventData.Metadata.grandparentTitle;
					const episodeTitle = eventData.Metadata.title;
					const episodeNumber = eventData.Metadata.index;
					const episodePoster = eventData.Metadata.grandparentThumb;
					console.log('New anime episode added: ${title} - Episode ${episodeNumber}: ${episodeTitle}');
				}
			}

	//This loop is for checking to see when a movie is added
	//Will refine later on
			else if(eventData.Metadata.librarySectionTitle == 'Movies' || eventData.Metadata.librarySectionTitle === 'Anime Movies'){
				if(eventData.Metadata && eventData.Metadata.type == 'movie'){
					const movieTitle = eventData.Metadata.title;
					console.log('New movie has been added to the server: ${movieTitle}')
				}
			}
	
		res.status(200).send('Webhook recieved');
	
	}
}

//const PORT = process.env.PORT || 3000;
//app.listen(PORT, () => {
	//console.log('Server is listening on port', PORT);
//});