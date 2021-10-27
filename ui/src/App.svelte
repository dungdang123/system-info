<script lang="ts">
import Router from "svelte-spa-router";

// Routes Head
import Dashboard from "./routes/Dashboard.svelte";
import Memory from "./routes/Memory.svelte";
import Network from "./routes/Network.svelte";
import Processes from "./routes/Processes.svelte";
import Processor from "./routes/Processor.svelte";
import ProcessView from "./routes/ProcessView.svelte";
import Settings from "./routes/Settings.svelte";

// Declare the applications top level routes
const routes = {
	"/": Dashboard,
	"/settings": Settings,
	"/cpu": Processor,
	"/mem": Memory,
	"/network": Network,
	"/process": Processes,
	// Dynamic Routes
	"/process/:pid": ProcessView
}

</script>

<Router {routes}/>

