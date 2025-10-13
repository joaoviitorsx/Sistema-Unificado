const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api', {
  hello: () => 'Olá do Electron 👋'
});
