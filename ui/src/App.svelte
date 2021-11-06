<script lang="ts">
import { AppTheme } from "./store/theme";
import Router from "svelte-spa-router";

// Routes Head
import Dashboard from "./routes/Dashboard.svelte";
import Network from "./routes/Network.svelte";
import Processes from "./routes/Processes.svelte";
import Performance from "./routes/Performance.svelte";
import ProcessView from "./routes/ProcessView.svelte";
import Settings from "./routes/Settings.svelte";
import Navigation from "./components/Navigation.svelte";

// Declare the applications top level routes
const routes = {
	"/": Dashboard,
	"/settings": Settings,
	"/performance": Performance,
	"/network": Network,
	"/process": Processes,
	// Dynamic Routes
	"/process/:pid": ProcessView
}

// change theme depending on global state.
$: {
	const body = document.body;
	if (body && AppTheme) body.classList.add($AppTheme);
}

</script>


<main class="main-window">
	<Navigation />
	<Router {routes}/>
</main>

