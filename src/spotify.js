export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "2475685753c44e5e9029dcafb6b959c3";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
  .substr(1)
  .split('&')
  .reduce((initial, item) => {
    let parts = item.split("=");
    initial[[parts[0]]] = decodeURIComponent(parts[1])
    return initial
  }, {})
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;


//access_token=BQBR8unt8oL98T9la9SdvXEsRBnBAjSG0csfiDGeGWGDHAmtRxH-6cy5JDc2COCw0jgmtMQgTSLrgENtnVRflczrGHj79RRDDlhxjD5BZYS-hVYB14Y4ieuSRSkZEUjYMbTF0XGQBxyhtqVCP3r0JlNXthgcAkffFdp0HdEZhnxzGzSl&token_type=Bearer&expires_in=3600