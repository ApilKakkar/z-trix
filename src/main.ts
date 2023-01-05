import App from './App.svelte';
import Experience from './Experience/Experience';

const app = new App({
	target: document.body,
});

export default app;


const experience = new Experience(document.querySelector('canvas.ztrix'))