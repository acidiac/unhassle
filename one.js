console.log('from renderer one');
const BrowserWindow = require('electron').remote.BrowserWindow;
const path = require('path');
const url = require('url');

const newWindowButton = document.getElementById('winThree');
newWindowButton.addEventListener('click', function(event) {
    let winThree = new BrowserWindow();
    // Loading an html file in the window
    winThree.loadURL(url.format({
        pathname: path.join(__dirname, 'three.html'),
        protocol: 'file',
        slashes: true
    }));
});