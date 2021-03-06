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

  describe('GET /api/v1/states', () => {
    it('should respond with an array of states', async () => {
      const response = await supertest(app)
        .get('/api/v1/states')
        .expect('Content-Type', /json/)
        .expect(200);
  
      expect(response.body.length).toBeGreaterThan(0);
    });
  
    it('should respond with an individual state', async () => {
      const response = await supertest(app)
        .get('/api/v1/states/1')
        .expect('Content-Type', /json/)
        .expect(200);
  
      expect(response.body.id).toBe(1);
    });
  
  function createHighlightWindow (message) {
    if (highlightWindow) {
      return;
    }
    // Create the browser window.
    highlightWindow = new BrowserWindow({
      title: 'Highlight Chat',
      closable: true,
      width: 1000,
      height: 320,
      frame: false,
      x: 10,
      y: 1080 - 300,
      hasShadow: false,
      transparent: true,
      titleBarStyle: 'customButtonsOnHover',
      minimizable: false,
      maximizable: false,
      alwaysOnTop: true,
      backgroundColor: '#00FFFFFF',
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
    });
    app.on('window-all-closed', function () {
        
        if (process.platform !== 'darwin') app.quit();
      });
      
      app.on('web-contents-created', (e, contents) => {
        contents.on('will-navigate', (event, url) => {
          event.preventDefault();
          console.log('blocked navigate:', url);
        });
        contents.on('new-window', async (event, url) => {
          event.preventDefault();
          console.log('blocked window:', url);
        });
      });
      
      app.on('activate', function () {
    
        if (mainWindow === null) createWindow();
      });

      app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (mainWindow === null) createWindow();
      });
      
      
}