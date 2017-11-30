const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require("url");

//declaring a window
let win;

function createWindow() {
    // new browser window instance
    win = new BrowserWindow();
    // Loading an html file in the window
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    //handling when user closes the window
    win.on('closed', () => {
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