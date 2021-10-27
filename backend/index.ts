import { app, BrowserWindow, ipcMain } from "electron"
import { join } from "path"


app.whenReady().then(main)
let window: BrowserWindow

async function main () {
    window = new BrowserWindow({
        width: 800, height: 600, show: false,
        autoHideMenuBar: true,
        webPreferences: {
            preload: join(__dirname, "./preload/preload.js"),
        }
    })

    window.loadFile(join(__dirname, "../../ui/public/index.html"))
    window.on("ready-to-show", window.show)
}