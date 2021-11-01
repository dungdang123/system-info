import { BrowserWindow } from "electron";
import { get_window_bounds, set_window_position, set_window_size } from "./window_startup";
import { join } from "path";

export const CreateMainWindow = async (dev: boolean) => {
    const devmode = dev;
    // Handle Initial Position and Settings.
    const { position, size } = get_window_bounds();
    const window = new BrowserWindow({
        icon:join(__dirname, "../../icon.ico"),
        width: size.x, height: size.y, show: false,
        x: position.x, y: position.y,
        autoHideMenuBar: true,
        frame: false,
        webPreferences: {
            preload: join(__dirname, "../../preload/preload.js"),
        }
    });

    window.loadFile(join(__dirname, "../../../../ui/public/index.html"));

    // Handle Resize and Common Window Operations
    window.on("ready-to-show", window.show);
    window.on("resized", () => set_window_size(window.getSize()))
    window.on("moved", () => set_window_position(window.getPosition()))



    return window;
}


