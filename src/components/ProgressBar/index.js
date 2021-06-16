import React from 'react';

const ProgressBar = () => {
	return (
    <div className="songProgression">
      <input type="range"  className="slider" id="range" />
      <span className="progression">time</span>
    </div>
	);
}

export default ProgressBar;