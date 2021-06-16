import React, { useState, useRef } from 'react';

/* import react icons librairy for the buttons */
import { BsFillSkipStartFill } from 'react-icons/bs';
import { BsFillSkipEndFill } from 'react-icons/bs';
import { BsFillPlayFill } from 'react-icons/bs';
import { BsFillPauseFill } from 'react-icons/bs';

const PlayerOptions = () => {
	// 1. Define the state of the play/pause button
	// defaut state : isPlayng is false i.e Pause is ON
	// 2. In the JSX part, set the rule as : 
	// IF isPlaying IS true THEN display Pause button else Display Play button
	// 3. Set a attribut onClick in the <div Play> and configure the function togglePlayPause
	// The action setIsPlaying is engaged when isPlaying is set as TRUE

	const [isPlaying, setIsPlaying] = useState(false);

	// References 
	const audioPlayer = useRef(); // ref to our audio component
	
	const togglePlayPause = () => {
		const prevValue = isPlaying;
		// if it's playing (FALSE), we are using our reference
		if (!prevValue) {
			setIsPlaying(true);
			// play() and pause() are HTML DOMelements
			audioPlayer.current.play();
		} else {
			setIsPlaying(false);
			audioPlayer.current.pause();
		}
	}
	return (
		<>
		<aside className="playerOption">
			<div className="previous"><BsFillSkipStartFill /></div>
			<audio ref={audioPlayer} src="/Users/alexma/Sites/projets/shuffler/shuffler/public/Compo7.wav" preload="metadata"></audio>
			<div className="play" onClick={togglePlayPause} >
				{isPlaying ? <BsFillPauseFill /> : <BsFillPlayFill/>}
			</div>
			<div className="next"><BsFillSkipEndFill /></div>
    	</aside>
		</>
	);
}

export default PlayerOptions;