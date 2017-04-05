'use strict';


const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')


let win
 
function createWindow () {
  // 创建浏览器窗口
  win = new BrowserWindow({
    width: 450,
    height: 195,
    resizable: false,
    minimizable: false,
    maximizable: false,
    focusable: false,
    alwaysOnTop: true,
    skipTaskbar: true,
    frame: false,
    hasShadow: true
  })
 
  // 载入页面文件 index.html
  win.loadURL('file://' + __dirname + '/app/index.html')
  
  win.openDevTools();

  // 窗口关闭事件监听
  win.on('closed', () => {
    win = null
  })
}
 
// 初始化完成，准备好创建浏览器窗口
app.on('ready', createWindow)
 
// 所有窗口关闭时退出
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
 
app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})