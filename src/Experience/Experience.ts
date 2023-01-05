import Sizes from "./Utils/sizes";
import EventEmitter from "./Utils/EventEmitter.js"

declare global {
    interface Window {
        experience:any;
    }
}

export default class Experience extends EventEmitter
{
    canvas: HTMLCanvasElement;
    sizes: Sizes;
    constructor(canvas){
        super()
        //  Global Access
        window.experience = this

        //Options
        this.canvas = canvas

        //Setup
        this.sizes = new Sizes()

        this.sizes.on('resize',()=>{
            this.resize()
        })
    }
    resize() {
        console.log('resize occured')
    }
}