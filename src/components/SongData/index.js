import React from 'react';
//import './data/songs.js';

const SongData = (songTitle, artistAlbum, image) => {
	return (
		<div>
			<div class="appOpener">
					<h2 class="title">What am I listening to...</h2>
			</div>
			<figure class="artistCap">
				<img src="./img/tom-ze.jpg" alt="you are listening to" />
			</figure>
			<figcaption class="artistSong">
					<h3 class="songTitle">{songTitle}</h3>
					<p class="artistAlbum">{artistAlbum}</p>
			</figcaption>            
		</div>
	);
}

export default SongData;