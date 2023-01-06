import App from './App.svelte';
import * as THREE from 'three'
import Experience from './Experience/Experience';

// main App
const app = new App({
	target: document.body,
});

export default app;


/**
 * Base
 */
const experience = new Experience(document.querySelector('canvas.ztrix'))