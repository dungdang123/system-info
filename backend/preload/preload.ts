import { ipcRenderer, contextBridge } from "electron";
import { platform, cpus } from "os";

const EVENTS_HANDLERS = {
    
}


export const MAIN_API = {
    OS: {
        platform: platform(),
        cores: cpus().length
    },
    Events: EVENTS_HANDLERS 
    
}

contextBridge.exposeInMainWorld("MAIN_API", MAIN_API);

