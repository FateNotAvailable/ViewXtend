const fs = require('fs');
const path = require('path');

// Path to the generated bundle.js file
const bundlePath = path.resolve(__dirname, 'dist/ViewXtend.user.js');

// Your banner comment
const bannerComment = `// ==UserScript==
// @name            ViewXtend
// @description     Youtube with extra features
// @icon            None
// @version         1.0.0
// @author          Fate (https://github.com/FateNotAvailable)
// @namespace       https://github.com/FateNotAvailable/ViewXtend
// @supportURL      https://github.com/FateNotAvailable/ViewXtend/issues
// @updateURL       https://raw.githubusercontent.com/FateNotAvailable/ViewXtend/main/dist/ViewXtend.user.js
// @license         GPL-3
// @icon            https://i.ibb.co/cwvhZQN/View-Xtend.png
// @match           https://www.youtube.com/*
// @match           https://www.youtube-nocookie.com/*
// @match           https://m.youtube.com/*
// @grant           none
// @run-at          document-start
// @compatible      chrome
// @compatible      firefox
// @compatible      opera
// @compatible      edge
// @compatible      safari
// ==/UserScript==

`;

// Read the existing bundle content
fs.readFile(bundlePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading bundle file: ${err}`);
    return;
  }

  // Combine the banner comment and the existing bundle content
  const updatedBundle = bannerComment + '\n' + data;

  // Write the updated bundle content back to the file
  fs.writeFile(bundlePath, updatedBundle, 'utf8', (err) => {
    if (err) {
      console.error(`Error writing updated bundle file: ${err}`);
    } else {
      console.log('Banner comment appended to the bundle.');
    }
  });
});
