const {app,dialog,BrowserWindow,Menu} = require("electron")
const {ipcMain} = require('electron')
const colors = require("./color_models");
const path = require('path');
var fs = require('fs');


let win;
const createWindow = () => {
  fs.readFile("config.json",function(err,data){
    if(err){
    }else{
      let dataWindow = JSON.parse(data);
    
      win = new BrowserWindow({
        width: dataWindow.mainWidgetWidth,
        height: dataWindow.mainWidgetHeight,
        frame:false,
        transparent:true,
        hasShadow:true,
        resizable: false,
        webPreferences: {
          nodeIntegration: true,
          contextIsolation: false
        }
      })
      win.setBackgroundColor(colors.mainColor)
      win.loadFile('main_layout.html')
    }
  }) 
}


  ipcMain.on('need-musiclist', (event, arg) => {

    try{
      const data = fs.readFileSync("./folder_select.txt",{encoding: "utf8"}); 
        if(data){

          var files = getDirectoriesWithList(data);
          event.sender.send('async-musiclist', files);
          // var walk    = require('walk');
          // var files   = [];
          // var walker  = walk.walk(arg, { followLinks: false });

          
          // walker.on('file', function(root, stat, next) {
          //     // Add this file to the list of files
          //     files.push(root + '/' + stat.name);
          //     next();
          // });

          // walker.on('end', function() {
            
          //     event.sender.send('async-musiclist', JSON.stringify(files))
          // });
        }

      }catch(err){
     
      }
    
  })


  ipcMain.on('select-dirs', async (event, arg) => {
    const result = await dialog.showOpenDialog(win, {
      properties: ['openDirectory']
    })
    if(result){
      try {
        fs.writeFileSync("./folder_select.txt", result['filePaths'][0]);   //'a+' is append mode
        console.log("File written successfully");
        event.sender.send('directories-selected',result.filePaths)
      } catch(err) {
        
      }
    }
    
   
  })


  const getDirectories = (source) => {

      const files = [];

      function getFiles(dir) {

          fs.readdirSync(dir).map(file => {

              const absolutePath = path.join(dir, file);

              const stats = fs.statSync(absolutePath);

              if (fs.statSync(absolutePath).isDirectory()) {

                  return getFiles(absolutePath);

              } else {
                  const modified = {
                      name: file,
                      dir: dir,
                      created: stats.birthtime,
                      modified: stats.mtime
                  };
                  return files.push(modified);
              }
          });
      }

      getFiles(source);
      return files;
  }

  function getDirectoriesWithList(source){
    const files = getDirectories(source);
    const lastModified = files.sort((a, b) => b.modified - a.modified);
    return JSON.stringify(lastModified);
  }

  app.whenReady().then(() => {

    createWindow()
    
  })