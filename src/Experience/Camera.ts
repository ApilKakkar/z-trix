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
    scrollY: number
    cursor: { x: number; y: number }
    parallaxY: number
    parallaxX: number
    instanceGroup: any
    time: import("/Users/apilkakkar/Personal/z-trix/src/Experience/Utils/Time").default
    constructor()
    {   
        this.experience = new Experience(HTMLCanvasElement)

        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas
        this.time = this.experience.time

        // for camera movement with scroll

        this.scrollY = window.scrollY

        window.addEventListener('scroll',()=>{
            this.scrollY = window.scrollY
        })

        // for camera movement with cursor

        this.cursor = {x:0,y:0}

        window.addEventListener('mousemove',(event)=>{
            this.cursor.x = event.clientX / this.sizes.width - 0.5
            this.cursor.y = event.clientY / this.sizes.height - 0.5
        })

        this.setInstance()
        // this.setOrbitControls()
    }
    setInstance() {
        // group for camera instance
        this.instanceGroup = new THREE.Group()
        this.scene.add(this.instanceGroup)

        // camera insatance
        this.instance = new THREE.PerspectiveCamera(
            35,
            this.sizes.width / this.sizes.height,
            0.1,
            100
        )

        this.instance.position.set(0, 0, 6)

        this.instanceGroup.add(this.instance)
        
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

        this.instance.position.y = - (this.scrollY / this.sizes.height) * this.experience.geometries.objectsDistance

        this.parallaxX = this.cursor.x
        this.parallaxY = this.cursor.y
        
        // we are doing easing by using lerping formula and also using deltatime so that it looks same on every pc.
        this.instanceGroup.position.x = - (this.parallaxX - this.instanceGroup.position.x) * 5 * (this.time.delta / 1000)
        this.instanceGroup.position.y = (this.parallaxY - this.instanceGroup.position.y) * 5 * (this.time.delta / 1000)
    }
}