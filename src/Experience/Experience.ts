import * as THREE from 'three'
import Sizes from "./Utils/sizes";
import EventEmitter from "./Utils/EventEmitter.js"
import Time from "./Utils/Time";
import Camera from './Camera';
import Renderer from './Renderer';
import Geometries from './Geometries';
import Lights from './Lights';

declare global {
    interface Window {
        experience:any;
    }
}

let instance = null;

export default class Experience extends EventEmitter
{
    canvas: HTMLCanvasElement;
    sizes: Sizes;
    time: Time;
    scene: any;
    camera: Camera;
    renderer: Renderer;
    geometries: Geometries;
    parameters: any;
    lights: Lights;
    constructor(canvas, parameters){
        super()

        //Making Experienc Class SINGLETON
        if(instance){
            return instance
        }

        instance = this

        //  Global Access
        window.experience = this

        //Options
        this.canvas = canvas
        this.parameters = parameters

        //Setup
        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.camera = new Camera()
        this.renderer = new Renderer()

        this.geometries = new Geometries()
        this.lights = new Lights()

        this.sizes.on('resize',()=>{
            this.resize()
        })

        this.time.on('tick', ()=>{
            this.update()
        })
    }
    resize() {
        // console.log('resize occured')
        this.camera.resize()
        this.renderer.resize()
    }

    update() {
        this.camera.update()
        this.renderer.update()
    }
}