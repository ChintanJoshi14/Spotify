import "./App.css";
import Login from "./pages/Login";
import React, { useEffect, useState } from "react";
import { getTokenFromUrl } from "./pages/spotify";
import { credentials } from "./config";
import Player from "./pages/Player";
// import { SpotifyGraphQLClient } from "spotify-graphql/dist";


function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

     const _token = hash.access_token;
    if (_token) {
      setToken(_token);
      credentials.accessToken = _token;
      console.log("credential access token: ", credentials.accessToken);
    }
    // console.log(_token);
  }, []);

  return <div className="App">
    {token ? <Player /> : <Login />}
    </div>;
}

export default App;
