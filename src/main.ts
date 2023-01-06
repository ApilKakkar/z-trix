import App from './App.svelte';
import Experience from './Experience/Experience';
import * as THREE from 'three'
import * as dat from 'dat.gui'

// main App
const app = new App({
	target: document.body,
});

export default app;


/**
 * Debug
 */
const gui = new dat.GUI()

const parameters = {
    materialColor: '#ffeded'
}

gui
    .addColor(parameters, 'materialColor')
	.onChange(()=>{
	})

/**
 * Base
 */
const experience = new Experience(document.querySelector('canvas.ztrix'), parameters)