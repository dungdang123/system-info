/// <reference types="svelte" />

import { MAIN_API } from "../../backend/preload/preload";

declare global {
    interface Window { MAIN_API: typeof MAIN_API; }
}
