import { credentials } from "../config";

export const authEndPoint = "https://accounts.spotify.com/authorize";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("="); //access_token=djvjnfdvsfdvsf
      initial[parts[0]] = decodeURIComponent(parts[1]); //djvjnfdvsfdvsf

      return initial;
    }, {});
};

export const loginUrl = `${authEndPoint}?client_id=${
  credentials.clientId
}&redirect_uri=${credentials.redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
