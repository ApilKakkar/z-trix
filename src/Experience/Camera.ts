import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Experience from "./Experience"

export default class Camera
{
    
    experience: Experience
    sizes: import("/Users/apilkakkar/Personal/z-trix/src/Experience/Utils/sizes").default
    scene: any
    canvas: HTMLCanvasElement
    instance: any
    controls: any
    constructor()
    {   
        this.experience = new Experience(HTMLCanvasElement, {})

        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas

        this.setInstance()
        // this.setOrbitControls()
    }
    setInstance() {
        this.instance = new THREE.PerspectiveCamera(
            35,
            this.sizes.width / this.sizes.height,
            0.1,
            100
        )

        this.instance.position.set(0, 0, 6)
        this.scene.add(this.instance)
    }

    setOrbitControls() {
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true
    }

    //resize on camera from experience class
    resize() {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update() {
        // for orbit controls
        // this.controls.update()
    }
}