import { writable } from "svelte/store";

const CreateThemeStore = () => {
    const {subscribe, set } = writable<Themes>("light-mode");

    return {
        subscribe,
        change: (val: Themes) => set(val)
    }
}


export const AppTheme = CreateThemeStore();