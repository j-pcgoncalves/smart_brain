import { useState } from 'react';

import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import { SECRET_CONFIG } from './secretConfig';

import ParticlesBg from 'particles-bg';

import './App.css';

const App = () => {
  const [input, setInput] = useState("");

  // Your PAT (Personal Access Token) can be found in the Account's Security section
  const PAT = SECRET_CONFIG.CLARIFAI_PAT_KEY;
  // Specify the correct user_id/app_id pairings
  // Since you're making inferences outside your app's scope
  const USER_ID = "clarifai";       
  const APP_ID = "main";
  // Change these to whatever model and image URL you want to use
  const MODEL_ID = 'face-detection';   
  const IMAGE_URL = input;

  const raw = JSON.stringify({
      "user_app_id": {
          "user_id": USER_ID,
          "app_id": APP_ID
      },
      "inputs": [
          {
              "data": {
                  "image": {
                      "url": IMAGE_URL
                  }
              }
          }
      ]
  });

  const requestOptions = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Key ' + PAT,
      },
      body: raw
  };

  const onInputChange = (event) => {
    setInput(event.target.value);
  }

  const onButtonSubmit = () => {
    fetch("https://cors-anywhere.herokuapp.com/https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
  }

  return (
    <div className="App">
      <ParticlesBg 
        color='#FFFFFF' 
        num={100} 
        type="cobweb" 
        bg={true} 
      />

      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm 
        onInputChange={onInputChange} 
        onButtonSubmit={onButtonSubmit} 
      />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
