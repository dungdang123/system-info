import { ipcRenderer, contextBridge } from "electron";
import { platform, cpus } from "os";

const EVENTS_HANDLERS = {
    
}


const WINDOW_EVENTS = {
    Minimize: () => ipcRenderer.send("win::minimize"),
    Exit: () => ipcRenderer.send("win::exit"),
}


export const MAIN_API = {
    OS: {
        platform: platform(),
        cores: cpus().length
    },
    Events: EVENTS_HANDLERS,
    Win: WINDOW_EVENTS,
    
}

contextBridge.exposeInMainWorld("MAIN_API", MAIN_API);

