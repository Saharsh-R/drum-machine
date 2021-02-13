import './App.scss';
import Button from '@material-ui/core/Button';
import  { useState, useEffect } from 'react';
function App() {
  let [instrument, setInstrument] = useState('')
  function handleButtonClick(instruID){
    setInstrument(instruID)
  }
  return (
      <div id='drum-machine' className="App">
        <div id='outer'>

          <div id='display'>
            <p>{instrument}</p>
          </div>

          <div className='button-container'>
            <DrumButton buttonId='Q' audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3' instrument='Chord-1' onButtonClick={handleButtonClick}/>
            <DrumButton buttonId='W' audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3' instrument='Chord-2' onButtonClick={handleButtonClick}/>
            <DrumButton buttonId='E' audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3' instrument='Chord-3' onButtonClick={handleButtonClick}/>
            <DrumButton buttonId='A' audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3' instrument='Shaker' onButtonClick={handleButtonClick}/>
            <DrumButton buttonId='S' audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3' instrument='Open-HH' onButtonClick={handleButtonClick}/>
            <DrumButton buttonId='D' audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3' instrument='Closed-HH' onButtonClick={handleButtonClick}/>
            <DrumButton buttonId='Z' audioSrc='https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3' instrument='Punchy-Kick' onButtonClick={handleButtonClick}/>
            <DrumButton buttonId='X' audioSrc='https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3' instrument='Side-Stick' onButtonClick={handleButtonClick}/>
            <DrumButton buttonId='C' audioSrc='https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3' instrument='Snare' onButtonClick={handleButtonClick}/>
          </div>

      </div>
    </div>

  );
}


function DrumButton({buttonId, audioSrc, instrument, onButtonClick}) {
  
  const handleKeyDown = event => {
    if (event.key.toUpperCase() == buttonId){
      handleClick()
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  function handleClick(){
    document.getElementById(buttonId).play()
    onButtonClick(instrument)
  }
  return (
    <Button id={`drum${buttonId}`} variant="contained" className='drum-pad' size="large" onClick={handleClick}>{buttonId}<audio src={audioSrc} className='clip' id={buttonId}></audio></Button>
  )

}
export default App;
