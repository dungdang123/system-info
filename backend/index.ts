require("v8-compile-cache");
// 3rd Party Imports
import { app, BrowserWindow, ipcMain } from "electron";

// Implimentations & Lib
import { CreateMainWindow } from "./lib/window/window_creator";

app.whenReady().then(main);
let window: BrowserWindow;
const Dev = !app.isPackaged;

async function main () {
    window = await CreateMainWindow (Dev);
}


async function shutdown () {
    window.close();
    app.quit ();
}

// IPC EVENTS

// Window Specific Events
ipcMain.on("win::minimize", () => window.minimize());
ipcMain.on("win::exit", () => shutdown());