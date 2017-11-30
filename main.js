const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require("url");

//declaring a window
let winOne, winTwo;

// just testing
console.log("from the main process");

function createWindow() {
    // new browser window instance
    winOne = new BrowserWindow();
    winTwo = new BrowserWindow();
    // Loading an html file in the window
    winOne.loadURL(url.format({
        pathname: path.join(__dirname, 'one.html'),
        protocol: 'file',
        slashes: true
    }));

    winTwo.loadURL(url.format({
        pathname: path.join(__dirname, 'two.html'),
        protocol: 'file',
        slashes: true
    }));

    // Dev console
    winOne.webContents.openDevTools();
    winTwo.webContents.openDevTools();
    //handling when user closes the window
    winOne.on('closed', () => {
        win = null;
    });
    winTwo.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);

// For mac
app.on('windows-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win == null) {
        createWindow()
    }
})