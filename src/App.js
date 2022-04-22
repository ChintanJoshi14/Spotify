import "./App.css";
import Login from "./pages/Login";
import React, { useEffect, useState } from "react";
import { getTokenFromUrl } from "./pages/spotify";
import Player from "./pages/Player";
// import { SpotifyGraphQLClient } from "../node_modules/spotify-graphql/dist/";
import { credentials } from "./config.js";


function App() {
  const [token, setToken] = useState(null);

  // const spotify_graphql = require('spotify-graphql');
  // const config = require(credentials);

  // SpotifyGraphQLClient(config).query(`

  //   track(id: "3W2ZcrRsInZbjWylOi6KhZ") {
  //     name
  //     artists {
  //       name
  //     }
  //     album {
  //       name
  //     }
  //   }
  // `).then(executionResult => {
  //   if (executionResult.errors) {
  //     console.log('error');
  //     console.error(JSON.stringify(executionResult.errors));
  //   } else {
  //     console.log('success');
  //     console.log(JSON.stringify(executionResult.data));
  //   }
  // })

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

     const _token = hash.access_token;
    if (_token) {
      setToken(_token);
      // credentials.accessToken = _token;
      // console.log("credential access token: ", credentials.accessToken);
    }
    // console.log(_token);
  }, []);

  return <div className="App">
    {token ? <Player /> : <Login />}
    </div>;
}

export default App;

