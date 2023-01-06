import * as THREE from 'three'
import Sizes from "./Utils/sizes";
import EventEmitter from "./Utils/EventEmitter.js"
import Time from "./Utils/Time";
import Camera from './Camera';

declare global {
    interface Window {
        experience:any;
    }
}

export default class Experience extends EventEmitter
{
    canvas: HTMLCanvasElement;
    sizes: Sizes;
    time: Time;
    scene: any;
    camera: Camera;
    constructor(canvas){
        super()
        //  Global Access
        window.experience = this

        //Options
        this.canvas = canvas

        //Setup
        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.camera = new Camera()

        this.sizes.on('resize',()=>{
            this.resize()
        })

        this.time.on('tick', ()=>{
            this.update()
        })
    }
    resize() {
        console.log('resize occured')
    }
    update() {
    }
}