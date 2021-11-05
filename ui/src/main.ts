import App from './App.svelte';

const api = window.MAIN_API;

const application = new App({
	target: document.body,
	intro: true
});

export default application;