import ElectronStore from "electron-store";
const store = new ElectronStore();

interface bounds_  {
    size: {x: number, y : number},
    position: {x: number, y : number}
}

/**
 * Returns the value in storage containing the bounds of the users last session saved in storage./
 */
export function get_window_bounds (): bounds_ {
    const position = store.get("window-position");
    const size = store.get("window-size");

    let bounds = {
        size: size as {x: number, y : number},
        position: position as {x: number, y : number}
    }

    if (!size) {
        bounds.size = {x: 800, y: 600}
        store.set("window-size", {x: 800, y: 600})
    }

    if (!position) {
        bounds.position = {x: 300, y: 200}
        store.set("window-position", {x: 300, y: 200});
    }

    return bounds;
}

/**
 * Sets the storage value of the window location.
 * @param pos number[x, y] tuple containin x, y cords of the current window,
 */
export function set_window_position (pos: number[]) {
    store.set("window-position", {x: pos[0], y: pos[1]});
}
/**
 * Sets the storage value of the window's current bounds.'
 * @param size number[x, y] tuple containin x, y cords of the current window x and y location,
 */
export function set_window_size (size: number[]) {
    store.set("window-size", {x: size[0], y: size[1]});
}