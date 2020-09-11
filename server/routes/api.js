const express = require("express");
const router = express.Router();
const axios = require("axios");
const SpotifyKeys = require("../../keys/SpotifyKeys");

/* GET api listing. */
router.get("/", (req, res) => {
  res.send("api works");
});

// SPOTIFY
// authenticate user spotify credentials
router.get("/spotify/auth", (req, res) => {
  console.log("api called");
  axios
    .get(
      "https://accounts.spotify.com/authorize?client_id=" +
        SpotifyKeys.client_id +
        "?response_type=code?redirect_uri='http://localhost:3000/'"
    )
    .then(res.send("response: ", res));
});

module.exports = router;
