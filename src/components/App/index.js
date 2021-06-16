import React from 'react';

import Header from '../Header';
import SongData from '../SongData';
import ProgressBar from '../ProgressBar';
import PlayerOptions from '../PlayerOptions';
import Footer from '../Footer';


const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <SongData />
        <ProgressBar />
        <PlayerOptions />
      </main>
      <Footer />
    </div>
  );
}

export default App;




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload. Hello World!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }