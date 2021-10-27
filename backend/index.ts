require("v8-compile-cache");

import { app, BrowserWindow, ipcMain } from "electron";
import { join } from "path";
import { get_window_bounds, set_window_position, set_window_size } from "./settings/window_startup";


app.whenReady().then(main);
let window: BrowserWindow;

async function main () {
    const { position, size } = get_window_bounds();
    console.log(position, size)
    window = new BrowserWindow({
        icon:join(__dirname, "../../icon.ico"),
        width: size.x, height: size.y, show: false,
        x: position.x, y: position.y,
        autoHideMenuBar: true,
        frame: false,
        webPreferences: {
            preload: join(__dirname, "./preload/preload.js"),
        }
    });

    window.loadFile(join(__dirname, "../../ui/public/index.html"));
    window.on("ready-to-show", window.show);

    window.on("resized", () => set_window_size(window.getSize()))
    window.on("moved", () => set_window_position(window.getPosition()))

    // handle window specific events
    ipcMain.on("win::minimize", () => window.minimize());
    ipcMain.on("win::exit", () => shutdown());
}



async function shutdown () {
    window.close();
    app.quit ();
}