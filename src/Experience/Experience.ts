import * as THREE from 'three'
import Sizes from "./Utils/sizes";
import EventEmitter from "./Utils/EventEmitter.js"
import Time from "./Utils/Time";
import Camera from './Camera';
import Renderer from './Renderer';
import Geometries from './Geometries';
import Lights from './Lights';
import DatGui from './DatGui';
import Particles from './Particles';
import Boxes from './Boxes';

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
    datgui: DatGui;
    particles: Particles;
    boxes: Boxes;
    constructor(canvas){
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
        this.datgui = new DatGui()

        //Setup
        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.camera = new Camera()
        this.renderer = new Renderer()

        this.geometries = new Geometries()
        this.lights = new Lights()
        this.particles = new Particles()
        this.boxes = new Boxes()

        this.sizes.on('resize',()=>{
            this.resize()
        })

        this.time.on('tick', ()=>{
            this.update()
        })

        this.camera.on('scroll', ()=>{
            this.scroll()
        })

        this.datgui.on('materialColorChange', ()=>{
            this.datguichangeGeometries()
        })

        this.datgui.on('particlesMaterialColorChange', ()=>{
            this.datguichangeParticles()
        })

        this.datgui.on('cameraPositoinChange', ()=>{
            console.log('camera pos change')
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
        this.geometries.update()
        this.boxes.update()
        this.particles.update()
    }

    scroll() {
        this.geometries.scroll()
    }

    datguichangeGeometries() {
        this.geometries.datguichange()
    }
    
    datguichangeParticles(){
        this.particles.datguichange()
    }
}