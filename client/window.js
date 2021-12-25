function createWindow () {
    // Create the browser window.
    mainWindow = new BrowserWindow({
      title: 'Live Chat',
      closable: true,
      width: 640,
      height: 1080,
      frame: false,
      x: 1920 - 640,
      y: 30,
      hasShadow: false,
      transparent: true,
      titleBarStyle: 'customButtonsOnHover',
      minimizable: false,
      maximizable: false,
      // alwaysOnTop: true,
      backgroundColor: '#00FFFFFF',
      // type: 'desktop',
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
    });
  
    // and load the index.html of the app.
    mainWindow.loadFile('index.html');
  
    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
  
    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      mainWindow = null;
    });
  }