const express = require("express");
const app = express();
const port = 4000;

const links = ["https://wuphub.com/", "https://blasterprotools.com"]; //If You Know You Know

let currentLinkIndex = 0;
let visitorCountForLink = 0;
let visitorPerLink = 5;

app.get("/", (req, res) => {
  const redirectLink = links[currentLinkIndex];
  visitorCountForLink++;

  console.log(
    `Visitor ${visitorCountForLink} redirected to ${redirectLink} (Link ${
      currentLinkIndex + 1
    })`
  );

  res.redirect(redirectLink);

  if (visitorCountForLink >= visitorPerLink) {
    visitorCountForLink = 0;

    currentLinkIndex = (currentLinkIndex + 1) % links.length;
  }
});

app.listen(port, "0.0.0.0", () => {
  console.log("App is listening on port", port);
});
