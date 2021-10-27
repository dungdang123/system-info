import App from './App.svelte';

const app = window.MAIN_API;

const application = new App({
	target: document.body,
});

export default application;